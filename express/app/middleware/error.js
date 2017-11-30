const logger = require('../lib/logger');

module.exports = (err, req, res, next) => {
  const { message, status = 500 } = err;
  logger.error(`${req.method} ${req.url} "${message}" ${Date.now() - res.locals.start}ms`);
  res.status(status).json({
    error: { status, message },
  });
  next();
};
