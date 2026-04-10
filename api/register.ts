import { MongoClient } from 'mongodb';
import { randomUUID } from 'crypto';

const VALID_TIERS = ['platinum', 'gold', 'silver'];

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const b = req.body ?? {};
  const { tier, firstName, lastName, email, phone, company, jobTitle, country, industry, linkedin, reason } = b;

  if (
    !VALID_TIERS.includes(tier) ||
    !firstName?.trim() || !lastName?.trim() || !email?.trim() ||
    !company?.trim() || !jobTitle?.trim() || !country?.trim() ||
    !industry || !reason?.trim()
  ) {
    return res.status(400).json({ error: 'Missing or invalid fields' });
  }

  const client = new MongoClient(process.env.MONGODB_URI!);
  try {
    await client.connect();
    await client
      .db('v1-production')
      .collection('gois-registrations')
      .insertOne({
        registrationId: randomUUID(),
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
        status: 'pending',
        emailSent: false,
        notificationSent: false,
      });
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('[register]', err);
    return res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
}
