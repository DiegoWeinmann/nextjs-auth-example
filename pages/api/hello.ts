import { NextApiRequest, NextApiResponse } from 'next';
import { connectDb } from '../../utils/db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDb('notes');
  res.statusCode = 200;
  res.json({ name: 'John Doe' });
};
