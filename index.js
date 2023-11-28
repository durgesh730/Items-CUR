//express
const express = require('express')
const app = express()
// db
require("./config/db")
// cors
const cors = require("cors")
// router
const router = require('./routes/user')
// port
const port = 5000
app.use(cors())
app.use(express.json())
app.use(router)

// server listen
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})