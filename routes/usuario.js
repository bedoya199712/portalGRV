const express = require ('express');
const app = express();
const router = express.Router();
const usuarioController = require ('../controllers/usuarioController');


router.post('/' , usuarioController.crearUsuario);
router.post("/loguearUsuario",usuarioController.iniciarSesion);


module.exports = router;