const logger = require('./logger');

module.exports = (req, res) => {
  logger.info(`200 ${req.method} ${req.url} ` +
    `${Date.now() - res.locals.start}ms`);
};
