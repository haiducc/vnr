import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await clientPromise;
    const db = client.db('VNR');

    const users = await db.collection('users').find({}).toArray();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};
