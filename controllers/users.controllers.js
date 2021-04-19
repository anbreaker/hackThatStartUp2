// Importacion de libreria para autoimportaciones de VsCode
// Renombrado de request & response para utilizar ayuda IDE
const { response, request } = require('express');

const encryptPass = require('../helpers/bcryptjs');

const User = require('../models/user.model');

const getUsers = (req = request, res = response) => {
  const { page = 1, limit = 3 } = req.query;

  res.json({ sms: 'get USER - API', page, limit });
};

const postUsers = async (req = request, res = response) => {
  const { username, email, password } = req.body;

  const user = new User({ username, email, password });

  user.password = encryptPass(password);

  // Save on mongoDB
  await user.save();

  res.json({ sms: 'post USER - API', user });
};

const putUsers = async (req = request, res = response) => {
  const { id } = req.params;

  const { _id, status, password, email, ...restParams } = req.body;

  // TODO validar contra mongoDB

  if (password) restParams.password = encryptPass(password);

  const user = await User.findByIdAndUpdate(id, restParams);

  res.json({ sms: 'put USER - API', user });
};

const patchUsers = (req = request, res = response) => {
  res.json({ sms: 'patch USER - API' });
};

const deleteUsers = (req = request, res = response) => {
  res.json({ sms: 'delete USER - API' });
};

module.exports = {
  getUsers,
  postUsers,
  putUsers,
  patchUsers,
  deleteUsers,
};
