const generateSelectQuery = (tableName, queryobj = {}) => {
  let query = `SELECT * FROM ${tableName}`
  if (!queryobj.where) {
    return { query }
  }

  query += `WHERE`

  const whereEntries = Object.entries(queryObj.where)
  const whereClauses = whereEntries.map((entry, idx) => `${entry[0]} = $${idx + 1}`).join(" AND ")
  const values = whereEntires.map(entry => entry[1])

  query += whereClauses

  return {
    query,
    values
  }
}
