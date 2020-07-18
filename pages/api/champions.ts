import handler from '../../utils/handler';

export default handler.get((_req, res) => {
  res.json({
    test: true,
  });
});
