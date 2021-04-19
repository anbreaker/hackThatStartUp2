const { Router } = require('express');

const {
  getAsteroids,
  postAsteroids,
  putAsteroids,
  patchAsteroids,
  deleteAsteroids,
} = require('../controllers/asteroids.controllers');
const {
  checkPostAsteroids,
  checkPutAsteroids,
  checkDeleteAsteroid,
} = require('../middlewares/checkAsteroidFields');

const router = Router();

router.get('/', getAsteroids);

router.post('/', checkPostAsteroids, postAsteroids);

router.put('/:id', checkPutAsteroids, putAsteroids);

router.patch('/:id', patchAsteroids);

router.delete('/:id', checkDeleteAsteroid, deleteAsteroids);

module.exports = router;
