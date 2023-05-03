const db = require('./connection')

const motorentDb = {

  motorcycles: {
    getById: async (motorcycleId) => {
      const { query, values }  = generateSelectQuery("motorcycles", {
        where: {
          id: campaignId
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
