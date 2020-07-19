import { NextApiResponse, NextApiRequest } from 'next';
import bcrypt from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { User } from 'models';
import { connectDb, handler, ErrorResponse } from 'utils';
import { NextHandler } from 'next-connect';

export default handler.get(
  async (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
    await connectDb();
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return next(new ErrorResponse('Invalid Email.', 400));
    }

    const result = await bcrypt.compare(password, user.password);

    if (!result) {
      return next(new ErrorResponse('Invalid password.', 401));
    }

    const token = sign(
      {
        email: user.email,
        id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    return res.status(200).json({
      success: true,
      data: {
        token,
      },
    });
  }
);
