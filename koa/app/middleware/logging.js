const logger = require('../lib/logger');

module.exports = async (ctx, next) => {
  ctx.state.start = Date.now();
  await next();
  logger.info(`200 ${ctx.method} ${ctx.url} ${Date.now() - ctx.state.start}ms`);
};
