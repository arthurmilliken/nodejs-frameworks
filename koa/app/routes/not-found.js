module.exports = (ctx) => {
  ctx.throw(404, 'The requested resource could not be found.');
};
