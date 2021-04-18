const { Router } = require('express');
const { check } = require('express-validator');

const { validateFields } = require('../middlewares/validateFields');

const router = Router();

const {
  getAsteroids,
  postAsteroids,
  putAsteroids,
  patchAsteroids,
  deleteAsteroids,
} = require('../controllers/asteroids.controllers');

router.get('/', getAsteroids);

router.post(
  '/',
  [
    check('full_name', 'The full_name is Mandatory').not().isEmpty(),
    check('a', 'The Semimajor axis of the orbit is Necesary').not().isEmpty(),
    check('a', 'The Semimajor axis of the orbit should be a number').isNumeric(),
    check('e', 'The Orbit excentricity is Necesary').not().isEmpty(),
    check('e', 'The Orbit excentricity should be a number').isNumeric(),
    check('i', 'The Orbit inclination is Necesary').not().isEmpty(),
    check('i', 'The Orbit inclination should be a number').isNumeric(),
    check('om', 'The longitude of the ascending node is Necesary').not().isEmpty(),
    check('om', 'The longitude of the ascending node should be a number').isNumeric(),
    check('w', 'The perihelion argument is Necesary').not().isEmpty(),
    check('w', 'The perihelion argument should be a number').isNumeric(),
    check('ma', 'The perihelion argument is Necesary').not().isEmpty(),
    check('ma', 'The perihelion argument should be a number').isNumeric(),
    validateFields,
  ],
  postAsteroids
);

router.put('/:id', putAsteroids);

router.patch('/:id', patchAsteroids);

router.delete('/:id', deleteAsteroids);

module.exports = router;
