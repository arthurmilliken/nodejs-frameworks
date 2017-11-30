const query = require('../lib/query');

module.exports = async (ctx, next) => {
  // Authenticate request...
  const result = await query(
    'https://oauth.app/verify/:token/:permission',
    ['TOKEN', 'PERMISSION'],
  );
  if (result === 'FAILURE') {
    ctx.throw(403, 'Forbidden');
  }
  return next();
};
