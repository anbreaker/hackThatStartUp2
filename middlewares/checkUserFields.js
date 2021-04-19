const { check } = require('express-validator');

const { userExistOnDB, emailExistOnDB } = require('../helpers/validator');
const { validateFields, validatePagination } = require('./validateFields');

const checkGetUser = [validatePagination];

const checkPostUser = [
  check('username', 'The username is Mandotory').not().isEmpty(),
  check(
    'password',
    'The password is mandatory and must be longer than 6 characters.'
  ).isLength({ min: 6 }),
  check('email', 'The email is not valid').isEmail(),
  check('email').custom(emailExistOnDB),
  validateFields,
];

const checkPutUser = [
  check('id', 'Not is a valid Id').isMongoId(),
  check('id').custom(userExistOnDB),
  validateFields,
];

module.exports = { checkGetUser, checkPostUser, checkPutUser };
