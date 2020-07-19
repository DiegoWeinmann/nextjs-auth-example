import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect, { Middleware } from 'next-connect';
import { NextApiExtendedRequest } from './types';
import { ErrorResponse } from './errorResponse';

export default nextConnect<
  NextApiRequest | NextApiExtendedRequest,
  NextApiResponse
>({
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method ${req.method} Not Allowed.` });
  },
  onError(error: ErrorResponse | Error, _req, res) {
    if (error instanceof ErrorResponse) {
      return res.status(error.statusCode).json({
        success: false,
        error: error.message,
      });
    }
    res.status(501).json({ error: `Server Error.` });
  },
});
