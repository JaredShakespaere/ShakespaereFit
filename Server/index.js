const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const ctrl = require('./ctrl')

app.post("/api/user", ctrl.addUser)
app.get("/api/shop", ctrl.getProduct)


const port = 4400
app.listen(port, console.log(`Running on port ${port}`))