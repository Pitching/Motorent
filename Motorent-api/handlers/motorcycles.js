const getMotorcycleById = async (req, res) => {
  console.log('this is motorcyclesID')
  if (!req.params.id) {
    res.status(400).send("missing motorcycle id")
    return
  }

  try {
    res.json(motorcycles);
  }
  catch (err) {
    res.status(500).send(err)
  }
}

exports.getMotorcycleById = getMotorcycleById;
