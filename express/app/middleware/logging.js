const logger = require('../lib/logger');

module.exports = (req, res, next) => {
  logger.info(`${req.method} ${req.url} ${Date.now() - res.locals.start}ms`);
  next();
};
