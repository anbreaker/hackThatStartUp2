const { Schema, model } = require('mongoose');

const AsteroidSchema = Schema(
  {
    full_name: {
      type: String,
      index: true,
      required: [true, 'Name is Mandatory'],
    },
    a: {
      type: Number,
      required: [true, 'An asteroid must have a semiaxis value'],
    },
    e: {
      type: Number,
      required: [true, 'An asteroid must have a eccentricity value'],
    },
    i: {
      type: Number,
      required: [true, 'An asteroid must have a inclination value'],
    },
    om: {
      type: Number,
      required: [true, 'An asteroid must have a longitude of the ascending node value'],
    },
    w: {
      type: Number,
      required: [true, 'An asteroid must have a perihelio argument value'],
    },
    ma: {
      type: Number,
      required: [true, 'An asteroid must have a mean anomaly value'],
    },
  },
  { timestamps: true }
);

module.exports = model('Asteroid', AsteroidSchema);
