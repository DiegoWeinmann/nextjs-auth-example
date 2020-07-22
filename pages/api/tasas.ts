import { Tasa } from 'models';
import { connectDb, authMiddleware, NextApiExtendedRequest } from 'utils';
import { handler } from 'utils';

export default handler
  .use(authMiddleware)
  .get(async (_req: NextApiExtendedRequest, res) => {
    await connectDb();
    const tasas = await Tasa.find();
    return res.status(200).json({
      success: true,
      data: tasas,
    });
  })
  .post(async (req, res) => {
    await connectDb();
    const tasa = await Tasa.create(req.body);
    return res.status(201).json({
      success: true,
      data: tasa,
    });
  });
