// Importacion de libreria para autoimportaciones de VsCode
// Renombrado de request & response para utilizar ayuda IDE
const { response, request } = require('express');

const encryptPass = require('../helpers/bcryptjs');

const User = require('../models/user.model');

const getUsers = async (req = request, res = response) => {
  const { limit = 3, from = 0 } = req.query;

  const query = { status: true };

  // const users = await User.find(query).skip(Number(from)).limit(Number(limit));
  // const totalUsers = await User.countDocuments(query);

  const promiseResponse = await Promise.all([
    User.countDocuments(query),
    User.find(query).skip(Number(from)).limit(Number(limit)),
  ]);

  const [totalUsers, Users] = promiseResponse;

  res.json({
    sms: 'get USER - API',
    totalUsers,
    Users,
  });

  // res.json({ sms: 'get USER - API', 'Total Users': totalUsers, users });
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

  const { _id, password, email, ...restParams } = req.body;

  // TODO validar contra mongoDB

  if (password) restParams.password = encryptPass(password);

  const user = await User.findByIdAndUpdate(id, restParams);

  res.json({ sms: 'put USER - API', user });
};

const patchUsers = (req = request, res = response) => {
  res.json({ sms: 'patch USER - API' });
};

const deleteUsers = async (req = request, res = response) => {
  const { id } = req.params;

  // "Physical" delete
  // const user = await User.findByIdAndDelete(id);

  // Delete by status (to preserve the integrity of the relationships in Mongo)
  const user = await User.findOneAndUpdate(id, { status: false });

  res.json({ sms: 'delete USER - API', user });
};

module.exports = {
  getUsers,
  postUsers,
  putUsers,
  patchUsers,
  deleteUsers,
};
