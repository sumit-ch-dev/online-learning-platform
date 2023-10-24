const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000
const configRoutes = require('./routes')
const chalk = require("chalk")
const cors = require('cors')
const bodyParser = require('body-parser')
const connectDB = require('./config/db')
const app = express()



connectDB()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

configRoutes(app)


app.listen(port, () => {
    console.log(
      `${chalk.bold.bgBlue(
        "server running on port"
      )}->${chalk.bold.bgRed(port)}`
    );
  });