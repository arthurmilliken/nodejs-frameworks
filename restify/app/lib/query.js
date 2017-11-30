module.exports = function query(sql, params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (params === ['ERROR']) {
        return reject(new Error('ERROR!'));
      }
      return resolve({ sql, params });
    }, 250);
  });
};
