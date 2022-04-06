//Conexion a la bd
const {Pool} = require('pg');

const datosBD = {
    user: 'userdesarrollogyt',
    host: '149.28.111.113',
    password: 'pgdb4dm1n2221*',
    database: 'gytdesarrollodb'
};

const conectarDB = async () => {
    try{
        new Pool(datosBD);
        
    } catch(e){
        console.log(e);
        process.exit(1); // detenemos la aplicacion
    }
}

module.exports = conectarDB