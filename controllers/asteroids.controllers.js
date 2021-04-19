// Importacion de libreria para autoimportaciones de VsCode
// Renombrado de request & response para utilizar ayuda IDE
const { response, request } = require('express');

const Asteroid = require('../models/asteroid.model');

const getAsteroids = async (req = request, res = response) => {
  const { limit = 5, from = 1 } = req.query;

  const query = { status: true };

  // const asteroid = await Asteroid.find(query).skip(Number(from)).limit(Number(limit));
  // const totalAsteroids = await Asteroid.countDocuments(query);

  const [totalAsteroids, Asteroids] = await Promise.all([
    Asteroid.countDocuments(query),
    Asteroid.find(query).skip(Number(from)).limit(Number(limit)),
  ]);

  res.json({
    sms: 'get ASTEROID - API',
    totalAsteroids,
    Asteroids,
  });
  // res.json({ sms: 'get ASTEROID - API', 'Total Asteroids': totalAsteroids, asteroid });
};

const postAsteroids = async (req = request, res = response) => {
  const { full_name, a, e, i, om, w, ma } = req.body;

  const asteroid = new Asteroid({ full_name, a, e, i, om, w, ma });

  // Save on mongoDB
  await asteroid.save();

  res.json({ sms: 'post ASTEROID - API', asteroid });
};

const putAsteroids = async (req = request, res = response) => {
  const { id } = req.params;

  // const { full_name, a, e, i, om, w, ma } = req.body
  const data = req.body;

  const asteroid = await Asteroid.findByIdAndUpdate(id, data);

  res.json({ sms: 'put ASTEROID - API', asteroid });
};

const patchAsteroids = (req = request, res = response) => {
  res.json({ sms: 'patch ASTEROID - API' });
};

const deleteAsteroids = (req = request, res = response) => {
  res.json({ sms: 'delete ASTEROID - API' });
};

module.exports = {
  getAsteroids,
  postAsteroids,
  putAsteroids,
  patchAsteroids,
  deleteAsteroids,
};
