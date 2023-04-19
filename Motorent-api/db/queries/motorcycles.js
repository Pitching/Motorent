const db = require('../connection');

const getMotorcycles = () => {
  return db.query('SLECT * FROM motorcycles;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getMotorcycles };
