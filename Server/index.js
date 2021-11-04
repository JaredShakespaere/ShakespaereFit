const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.json())
app.use(cors())

const ctrl = require('./ctrl')

app.post("/api/user", ctrl.addUser)


const port = process.env.PORT || 4400

app.listen(port, () => console.log(`Running on port ${port}`))