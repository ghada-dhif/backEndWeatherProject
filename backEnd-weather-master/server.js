const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const axios = require("axios").default;
const cors = require('cors');

const server = require('http').Server(app)

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))
app.get('/', function (req, res) {
    res.status(200).json("Backend server working properly! 🙌 ");
})
app.get('/json', function (req, res) {
   res.status(200).json({"message":"ok"})
})
// Server start
server.listen(3001, function () {
 console.log('Votre app est disponible sur localhost:3001 !')
})
