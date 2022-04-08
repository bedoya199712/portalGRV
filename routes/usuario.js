const express = require ('express');
const app = express();
const router = express.Router();
const usuarioController = require ('../controllers/usuarioController');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

router.get("/loguearUsuario",usuarioController.iniciarSesion);


module.exports = router;