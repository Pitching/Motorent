const { json } = require('body-parser')
const motorentDb = require ('../db/motorent_db');

const getMotorcycles = async (req, res) => {
  try {
    const motorcycles = await motorentDb.motorcycles.getAll()
    res.json(motorcycles)
  }
  catch (err) {
    res.status(500).send(err)
  }
}


const getMotorcycleById = async (req, res) => {
  console.log('this is motorcyclesID')
  if (!req.params.id) {
    res.status(400).send("missing motorcycle id")
    return
  }

  try {
    const motorcycles = await
    res.json(motorcycles);
  }
  catch (err) {
    res.status(500).send(err)
  }
}

exports.getMotorcycleById = getMotorcycleById;
exports.getMotorcycles = getMotorcycles;
