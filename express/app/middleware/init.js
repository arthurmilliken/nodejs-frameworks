module.exports = (req, res, next) => {
  res.locals.start = Date.now();
  next();
}