const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const addressRoutes = require("./routes/address")

const { API_PATH, PORT } = require('./variables')

//Visualizacion del contenido del endpoint o envio del contenido
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static("uploads"));
app.use('/uploads', express.static('uploads'));

app.use(`/${API_PATH}/addresses`, addressRoutes);

module.exports = app
