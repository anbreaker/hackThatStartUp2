const { Router } = require('express');
const { check } = require('express-validator');

const { validateFields } = require('../middlewares/validateFields');
const { emailExistOnDB, userExistOnDB } = require('../helpers/validator');
const {
  getUsers,
  postUsers,
  putUsers,
  patchUsers,
  deleteUsers,
} = require('../controllers/users.controllers');

const router = Router();

router.get('/', getUsers);

router.post(
  '/',
  [
    check('username', 'The username is Mandotory').not().isEmpty(),
    check(
      'password',
      'The password is mandatory and must be longer than 6 characters.'
    ).isLength({ min: 6 }),
    check('email', 'The email is not valid').isEmail(),
    check('email').custom(emailExistOnDB),
    validateFields,
  ],
  postUsers
);

router.put(
  '/:id',
  [
    check('id', 'Not is a valid Id').isMongoId(),
    check('id').custom(userExistOnDB),
    validateFields,
  ],
  putUsers
);

router.patch('/:id', patchUsers);

router.delete('/:id', deleteUsers);

module.exports = router;
