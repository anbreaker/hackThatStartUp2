const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.routes();
  }

  routes() {
    this.app.get('/', (req, res) => {
      res.send('Hello World');
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server app listening at http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
