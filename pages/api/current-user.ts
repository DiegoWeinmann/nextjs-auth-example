import { User } from 'models';
import { connectDb, authMiddleware, NextApiExtendedRequest } from 'utils';
import { handler } from 'utils';

export default handler
  .use(authMiddleware)
  .get(async (req: NextApiExtendedRequest, res) => {
    await connectDb();
    const user = await User.findOne({ email: req.user.email }).select(
      '-password'
    );
    console.log(user);
    return res.status(200).json({
      success: true,
      user: user.toObject({ getters: true }),
    });
  });
