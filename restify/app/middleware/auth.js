const query = require('../lib/query');

module.exports = (req, res, next) => {
  // Authenticate request...
  query(
    'https://oauth.app/verify/:token/:permission',
    ['TOKEN', 'PERMISSION'],
  ).then(
    (result) => {
      if (result === 'FAILURE') {
        const err = new Error('Forbidden');
        err.status = 403;
        return next(err);
      }
      return next();
    },
    next,
  ).catch((err) => {
    next(err);
  });
};
