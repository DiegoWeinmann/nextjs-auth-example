import { NextApiResponse, NextApiRequest } from 'next';
import bcrypt from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { User } from 'models';
import { connectDb } from 'utils';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDb();
  if (req.method === 'GET') {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: 'Email not found.' });
    }

    const result = await bcrypt.compare(password, user.password);

    if (!result) {
      return res.status(400).json({
        success: false,
        message: 'Invalid password.',
      });
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
  res.end(`Http ${req.method} is not supported for this endpoint.`);
};
