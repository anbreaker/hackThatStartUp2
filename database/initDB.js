const readline = require('readline');
const csvtojson = require('csvtojson');
require('dotenv').config();

const Asteroids = require('../models/asteroid.model');

// Init Script from (root '/')
const { dbConnection } = require('../database/mongoose.config');

// Delete all Asteroids
const initAsteroidsDB = async () => {
  try {
    console.log('Emptying asteroids collection...');

    await Asteroids.deleteMany();

    console.log('Data successfully deleted!');
  } catch (error) {
    console.log(`There was an error!: ${error}`);
    process.exit(1);
  }
};

// Open ConnectDb
// const connectDB = async () => {
//   await dbConnection();
// };

const askUser = (askText) => {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question(askText, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
};

const connectDB = async () => {
  try {
    const db = await dbConnection();
    // Ask to initialize DB
    const response = await askUser('Are you sure to initialize DB? (no/yes) ');

    if (response.toLowerCase() !== 'yes' && response.toLowerCase() !== 'y') {
      console.log('Process aborted!');
      return process.exit();
    }

    await initAsteroidsDB();

    // close connection

    process.exit();
  } catch (error) {
    console.log(`There was an error!: ${error}`);
    process.exit(1);
  }
};

connectDB();
