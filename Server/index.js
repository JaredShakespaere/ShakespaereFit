const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.json())
app.use(cors())

const ctrl = require('./ctrl')

app.post("/api/user", ctrl.addUser)
app.get("/api/shop", ctrl.getProduct)

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "../homePage.html"))

})
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "../shop.html"))

})
app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../main.css'))
  })


  const port = process.env.PORT || 4400

app.listen(port, () => console.log(`Running on port ${port}`))