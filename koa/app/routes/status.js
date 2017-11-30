const start = Date.now();

module.exports = (ctx) => {
  ctx.body = {
    message: 'welcome to koajs!',
    uptime_ms: Date.now() - start,
  };
};
