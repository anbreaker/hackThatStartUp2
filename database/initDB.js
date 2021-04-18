const readline = require('readline');
const csvtojson = require('csvtojson');
require('dotenv').config();

const asteroids = require('../models/asteroid.model');

// TODO connect con mongo etc
const { dbConnection } = require('../database/mongoose.config');

// Open ConnectDb

const connectDB = async () => {
  await dbConnection();
};

// Delete all Asteroids
// const initAsteroidsDB = async () => {
//   await connectDB();

//   try {
//     console.log('Emptying asteroids collection...');

//     await asteroids.deleteMany();

//     console.log('Data successfully deleted!');
//   } catch (error) {
//     console.log(`There was an error!: ${error}`);
//     process.exit(1);
//   }
// };

connectDB();
