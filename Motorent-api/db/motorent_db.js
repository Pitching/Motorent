const db = require('./connection')
const { generateSelectQuery } = require('./utils/query_generators');

const motorentDb = {

  motorcycles: {

    getAll: async () => {
      const query = `SELECT * FROM motorcycles`
      try {
        const result = await db.query(query)
        return result.rows
      }
      catch (err) {
        throw err
      }
    },

    getByMotorcycleId: async (motorcycleId) => {
      const { query, values }  = generateSelectQuery("motorcycles", {
        where: {
          id: motorcycleId
        }
      })

      try {
        const result = await db.query(query, values)
        return result.rows[0]
      }
      catch (err) {
        throw err
      }
    }
  }

}

module.exports = motorentDb
