const logger = require('../lib/logger');

module.exports = function error(req, res, err, next) {
  const { message, statusCode = 500 } = err;
  const log = `${statusCode} ${req.method} ${req.url} "${message}" ` +
    `${Date.now() - res.locals.start}ms`;

  if (statusCode >= 500) {
    logger.error(log);
  } else {
    logger.warn(log);
  }

  const e = err;
  e.toJSON = function toJSON() {
    return {
      error: { status: statusCode, message },
    };
  };

  e.toString = function toString() {
    return JSON.stringify(e.toJSON());
  };
  return next();
};
