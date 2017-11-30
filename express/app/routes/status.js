const start = Date.now();

module.exports = (req, res, next) => {
  res.json({
    message: 'welcome to express!',
    uptime_ms: Date.now() - start,
  });
  next();
};
