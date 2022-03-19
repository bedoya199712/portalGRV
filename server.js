//Librerias
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();


//Uso librerias
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//api

app.use("/api", (request, response) => {
  response.json([
    {
      id: 1,
      name: "Prueba 1",
    },
    {
      id: 2,
      name: "Prueba 2",
    },
    {
      id: 3,
      name: "Prueba 3",
    },
  ]);
});

app.get('/', function(req, res) {
  res.send('Hola Mundo!');
});


//Carga el frontend
app.use(express.static(path.join(__dirname, "public","portalGRV")));


//Servidor
app.listen(3000, function() {
  console.log('escuchando en el puerto 3000!');
});