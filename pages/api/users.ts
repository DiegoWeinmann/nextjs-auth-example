import { NextApiResponse, NextApiRequest } from 'next';
import { User } from 'models';
import { connectDb, authHandler, NextApiExtendedRequest } from 'utils';

export default authHandler(
  async (req: NextApiExtendedRequest, res: NextApiResponse) => {
    await connectDb();
    if (req.method === 'GET') {
      console.log(req.user);
      const users = await User.find();
      return res.status(200).json({
        success: true,
        data: users,
      });
    }
    res.end(`Http ${req.method} is not supported for this endpoint.`);
  }
);
