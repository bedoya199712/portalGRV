//Librerias
//Servidor
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

//BD
//Sesiones


//Uso librerias
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//api
app.use('/api', require('./routes/usuario'));



//Carga el frontend
app.use(express.static(path.join(__dirname, "public","portal-grv")));


//Servidor
app.listen(80, function() {
  console.log('escuchando en el puerto 80!');
});