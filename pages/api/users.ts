import { NextApiResponse, NextApiRequest } from 'next';
import { User } from 'models';
import { connectDb, authMiddleware } from 'utils';
import { handler } from 'utils';

export default handler.use(authMiddleware).get(async (req, res) => {
  console.log(req.user);
  await connectDb();
  const users = await User.find();
  return res.status(200).json({
    success: true,
    data: users,
  });
});
