const query = require('../lib/query');

module.exports = async (ctx) => {
  const start = Date.now();
  const result = await query(
    'select * from hello where id = $1',
    [ctx.params.id],
  );
  if (ctx.query.foo) {
    result.foo = ctx.query.foo;
  }
  result.ms = Date.now() - start;
  ctx.body = result;
};
