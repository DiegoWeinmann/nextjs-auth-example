import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { verify } from 'jsonwebtoken';
import { NextApiExtendedRequest } from 'utils';
import { User } from 'models';

export const authHandler = (
  fn: (
    req: NextApiExtendedRequest,
    res: NextApiResponse
  ) => void | Promise<void>
) => async (req: NextApiExtendedRequest, res: NextApiResponse) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(403).json({
      success: false,
      message: 'JWT is required for this endpoint.',
    });
  }

  try {
    const decodedToken = verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ email: decodedToken['email'] });
    req.user = user;
    return await fn(req, res);
  } catch (err) {
    return res.status(403).json({
      success: false,
      message: 'Invalid JWT.',
    });
  }
};
