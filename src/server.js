require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webrouter = require('./route/web')

const app = express()
const port = process.env.PORT
const hostname = process.env.HOST_NAME


configViewEngine(app);
app.use('/',webrouter)


app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port} ${hostname}`)
})