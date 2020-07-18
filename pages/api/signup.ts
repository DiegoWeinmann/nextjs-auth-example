import { NextApiResponse, NextApiRequest } from 'next';
import { User } from 'models';
import bcrypt from 'bcryptjs';
import { connectDb } from 'utils';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDb();
  if (req.method === 'POST') {
    console.log(req.body);
    const { name, email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json({ success: false, message: 'Email already exists.' });
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
  res.end(`Http ${req.method} is not supported for this endpoint.`);
};
