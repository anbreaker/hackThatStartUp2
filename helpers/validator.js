const User = require('../models/user.model');
const Asteroid = require('../models/asteroid.model');

const emailExistOnDB = async (email) => {
  const emailExist = await User.findOne({ email });

  if (emailExist) throw new Error(`The email ${email}, already exists`);
};

const userExistOnDB = async (id) => {
  const userExist = await User.findById(id);

  if (!userExist) throw new Error(`The user with id '${id}', not exists on DB`);
};

const asteroidExistOnDB = async (id) => {
  const asteroidExist = await Asteroid.findById(id);

  if (!asteroidExist) throw new Error(`The user with id '${id}', not exists on DB`);
};

module.exports = { emailExistOnDB, userExistOnDB, asteroidExistOnDB };
