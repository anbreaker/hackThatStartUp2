const User = require('../models/user.model');

// TODO preguntar como hacer para enviar
// los status o si esto esta bien.
const emailExistOnDB = async (email) => {
  const emailExist = await User.findOne({ email });

  if (emailExist) throw new Error(`The email ${email}, already exists`);
};

const userExistOnDB = async (id) => {
  const userExist = await User.findById(id);

  if (!userExist) throw new Error(`The user with id -> ${id}, not exists on DB`);
};

module.exports = { emailExistOnDB, userExistOnDB };
