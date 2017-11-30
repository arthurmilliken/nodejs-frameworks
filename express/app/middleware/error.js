const logger = require('../lib/logger');

module.exports = (err, req, res, next) => {
  const { message, status = 500 } = err;
  const log = `${status} ${req.method} ${req.url} "${message}" ` +
    `${Date.now() - res.locals.start}ms`;

  if (status >= 500) {
    logger.error(log);
  } else {
    logger.warn(log);
  }

  res.status(status).json({
    error: { status, message },
  });

  next();
};

