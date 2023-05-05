const db = require('./connection')
const { generateSelectQuery } = require('./utils/query_generators');

const motorentDb = {

  motorcycles: {
    getByMotorcycleId: async (motorcycleId) => {
      const { query, values }  = generateSelectQuery("motorcycles", {
        where: {
          motorcycle_id: motorcycleId
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
