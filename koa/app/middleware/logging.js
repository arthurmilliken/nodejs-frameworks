const logger = require('../lib/logger');

module.exports = async (ctx, next) => {
  const start = Date.now();
  try {
    await next();
    logger.info(`200 ${ctx.method} ${ctx.url} ${Date.now() - start}ms`);
  } catch (err) {
    const { message, status = 500 } = err;
    ctx.status = status;
    ctx.body = {
      error: { status, message },
    };    
    logger.error(`${status} ${ctx.method} ${ctx.url} "${message}" ${Date.now() - start}ms`);
  }
};
