import { MongoClient } from 'mongodb';

export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  if (req.headers['x-pipeline-secret'] !== process.env.PIPELINE_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (!process.env.MONGODB_URI) {
    console.error('[reminder-queue] MONGODB_URI env var is not set');
    return res.status(500).json({ error: 'Server misconfiguration' });
  }

  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const docs = await client
      .db('v1-production')
      .collection('event-registrations')
      .find({ status: 'pending_payment' })
      .sort({ submittedAt: 1 })
      .limit(50)
      .toArray();
    return res.status(200).json(docs.map(d => ({
      registrationId: d.registrationId,
      confirmationNumber: d.confirmationNumber,
      event: d.event,
      tier: d.tier,
      firstName: d.firstName,
      lastName: d.lastName,
      email: d.email,
      company: d.company,
      jobTitle: d.jobTitle,
      country: d.country,
      submittedAt: d.submittedAt,
    })));
  } catch (err) {
    console.error('[reminder-queue]', err);
    return res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
}
