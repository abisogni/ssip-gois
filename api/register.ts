import { MongoClient } from 'mongodb';
import { randomUUID } from 'crypto';

const VALID_TIERS = ['platinum', 'gold', 'silver'];

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const b = req.body ?? {};
  const { tier, firstName, lastName, email, phone, company, jobTitle, country, industry, linkedin, reason, mailingList } = b;

  if (
    !VALID_TIERS.includes(tier) ||
    !firstName?.trim() || !lastName?.trim() || !email?.trim() ||
    !company?.trim() || !jobTitle?.trim() || !country?.trim() ||
    !industry || !reason?.trim()
  ) {
    return res.status(400).json({ error: 'Missing or invalid fields' });
  }

  if (!process.env.MONGODB_URI) {
    console.error('[register] MONGODB_URI env var is not set');
    return res.status(500).json({ error: 'Server misconfiguration' });
  }

  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const db = client.db('v1-production');

    // Sequential confirmation number
    const counterDoc = await db.collection('event-counters').findOneAndUpdate(
      { _id: 'TX-2606' as any },
      { $inc: { seq: 1 } },
      { upsert: true, returnDocument: 'after' }
    );
    const seq: number = (counterDoc as any)?.seq ?? 1;
    const confirmationNumber = `GOIS26-${String(seq).padStart(4, '0')}`;

    await db.collection('event-registrations').insertOne({
      registrationId: randomUUID(),
      confirmationNumber,
      submittedAt: new Date(),
      tier,
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      phone: (phone ?? '').trim(),
      company: company.trim(),
      jobTitle: jobTitle.trim(),
      country: country.trim(),
      industry,
      linkedin: (linkedin ?? '').trim(),
      reason: reason.trim(),
      event: 'TX-2606',
      mailingList: mailingList === true,
      status: 'pending',
      emailSent: false,
      notificationSent: false,
    });

    return res.status(200).json({ success: true, confirmationNumber });
  } catch (err) {
    console.error('[register]', err);
    return res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
}
