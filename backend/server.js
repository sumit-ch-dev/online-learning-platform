const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const configRoutes = require('./routes')
const chalk = require("chalk")
const app = express()

configRoutes(app)



app.listen(port, () => {
    console.log(
      `${chalk.bold.bgBlue(
        "server running on port"
      )}->${chalk.bold.bgRed(port)}`
    );
  });