const { modelos } = require("../database/database");

exports.iniciarSesion = async (req,res) => {
    let resultado = await modelos.Usuario.findOne({ where: { numero: 1 } });
    res.status(200).send({  
    message: resultado.nombre
})
}