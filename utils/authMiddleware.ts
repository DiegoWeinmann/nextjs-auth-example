import { verify } from 'jsonwebtoken';
import { User } from 'models';
import { NextApiResponse } from 'next';
import { NextHandler } from 'next-connect';
import { NextApiExtendedRequest } from './types';
import { ErrorResponse } from './errorResponse';

export const authMiddleware = async (
  req: NextApiExtendedRequest,
  res: NextApiResponse,
  next: NextHandler
) => {
  const token = req.headers.authorization;

  if (!token) {
    return next(new ErrorResponse('JWT is required for this endpoint.', 401));
  }

  try {
    const decodedToken = verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ email: decodedToken['email'] });
    req.user = user;
    next();
  } catch (err) {
    return res.status(403).json({
      success: false,
      message: 'Invalid JWT.',
    });
  }
};
