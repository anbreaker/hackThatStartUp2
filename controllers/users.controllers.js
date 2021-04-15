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

  // Verificar Email
  const emailExist = await User.findOne({ email });
  if (emailExist) return res.status(400).json({ error: 'This email already exists' });

  user.password = await encryptPass(password);

  // Save on DB
  await user.save();

  res.json({ sms: 'post USER - API', user });
};

const putUsers = (req = request, res = response) => {
  const { id } = req.params;

  res.json({ sms: 'put USER - API', id });
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
