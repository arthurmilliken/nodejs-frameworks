const logger = require('../lib/logger');

module.exports = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    const { message, status = 500 } = err;
    logger.error(`${status} ${ctx.method} ${ctx.url} "${message}" ${Date.now() - ctx.state.start}ms`);
    ctx.status = status;
    ctx.body = {
      error: { status, message },
    };
  }
};
