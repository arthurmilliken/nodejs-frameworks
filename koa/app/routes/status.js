const start = Date.now();

module.exports = (ctx) => {
  ctx.body = {
    message: 'welcome to koa!',
    uptime_ms: Date.now() - start,
  };
};
