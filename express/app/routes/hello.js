const query = require('../lib/query');

module.exports = (req, res, next) => {
  const start = Date.now();
  query(
    'select * from hello where id = $1',
    [req.params.id],
  ).then(
    (result) => {
      const payload = result;
      if (req.query.foo) {
        payload.foo = req.query.foo;
      }
      payload.ms = Date.now() - start;
      res.json(payload);
      next();
    },
    next,
  );
};
