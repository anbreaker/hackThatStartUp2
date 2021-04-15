const { Router } = require('express');
const router = Router();

const {
  getUsers,
  postUsers,
  putUsers,
  patchUsers,
  deleteUsers,
} = require('../controllers/users.controllers');

router.get('/', getUsers);

router.post('/', postUsers);

router.put('/:id', putUsers);

router.patch('/:id', patchUsers);

router.delete('/:id', deleteUsers);

module.exports = router;
