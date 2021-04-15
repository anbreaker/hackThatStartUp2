const User = require('../models/user.model');

// TODO preguntar como hacer para enviar
// los status o si esto esta bien.
const emailExistOnDB = async (email) => {
  const emailExist = await User.findOne({ email });

  if (emailExist) throw new Error(`The email ${email}, already exists`);
};

module.exports = { emailExistOnDB };
