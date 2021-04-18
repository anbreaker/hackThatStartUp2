const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { dbConnection } = require('../database/mongoose.config');
const { db } = require('./asteroid.model');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // API Routes
    this.routeUsers = '/api/users';
    this.routeAsteroids = '/api/asteroids';

    // Connect to Database
    this.connectDB();

    // Middlewares
    this.middlewares();

    // Routes
    this.routes();
  }

  middlewares() {
    // cors to use Access-Control-Allow-Origin (Browsers)
    this.app.use(cors());

    // Read Express Data
    this.app.use(express.json());

    // Https views
    this.app.use(morgan('dev'));
  }

  async connectDB() {
    await dbConnection();
  }

  routes() {
    this.app.use(this.routeUsers, require('../routes/users.routes'));

    this.app.use(this.routeAsteroids, require('../routes/asteroids.routes'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server app listening at http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
