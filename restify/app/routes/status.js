// const logRequest = require('../lib/log-request');

const start = Date.now();

module.exports = (req, res, next) => {
  res.json({
    message: 'welcome to restify!',
    uptime_ms: Date.now() - start,
  });
  next();
  // logRequest(req, res);
};
