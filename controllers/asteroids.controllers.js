// Importacion de libreria para autoimportaciones de VsCode
// Renombrado de request & response para utilizar ayuda IDE
const { response, request } = require('express');

const Asteroid = require('../models/asteroid.model');

const getAsteroids = (req = request, res = response) => {
  const { page = 1, limit = 3 } = req.query;

  res.json({ sms: 'get ASTEROID - API', page, limit });
};

const postAsteroids = async (req = request, res = response) => {
  const { full_name, a, e, i, om, w, ma } = req.body;

  const asteroid = new Asteroid({ full_name, a, e, i, om, w, ma });

  // Save on mongoDB
  await asteroid.save();

  res.json({ sms: 'post ASTEROID - API', asteroid });
};

const putAsteroids = (req = request, res = response) => {
  const { id } = req.params;

  res.json({ sms: 'put ASTEROID - API', id });
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
