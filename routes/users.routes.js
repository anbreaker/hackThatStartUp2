const { Router } = require('express');

const {
  getUsers,
  postUsers,
  putUsers,
  patchUsers,
  deleteUsers,
} = require('../controllers/users.controllers');
const { checkPostUser, checkPutUser } = require('../middlewares/checkUserFields');

const router = Router();

router.get('/', getUsers);

router.post('/', checkPostUser, postUsers);

router.put('/:id', checkPutUser, putUsers);

router.patch('/:id', patchUsers);

router.delete('/:id', deleteUsers);

module.exports = router;
