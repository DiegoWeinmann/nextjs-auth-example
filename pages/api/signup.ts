import { NextApiResponse, NextApiRequest } from 'next';
import { User } from 'models';
import bcrypt from 'bcryptjs';
import { connectDb, handler, ErrorResponse } from 'utils';
import { NextHandler } from 'next-connect';

export default handler.post(
  async (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
    await connectDb();
    console.log(req.body);
    const { name, email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      return next(new ErrorResponse('Email already exists.', 400));
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      success: true,
      data: newUser.toObject({ getters: true, versionKey: false }),
    });
  }
);
