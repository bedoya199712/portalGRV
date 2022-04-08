
//Librerias

//Servidor
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config(path.resolve(process.cwd(), process.env.NODE_ENV === 'development' ? 'development.env' : '.env'));
const app = express();


//Sesiones


//Uso librerias
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//api
app.use('/api', require('./routes/usuario'));



//Carga el frontend
app.use(express.static(path.join(__dirname, "public","portal-grv"),{index: "index.html"}));
app.use(function(req,res) {
  res.sendFile(path.join(__dirname, "public","portal-grv","index.html"));

})

//Servidor
app.listen(80, function() {
  console.log('escuchando en el puerto 80!');
});