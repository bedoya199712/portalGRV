const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('gytdesarrollodb', 'userdesarrollogyt', 'pgdb4dm1n2221*', {
    host: '149.28.111.113',
    dialect: 'postgres'
  });

  const modelos = {
    Usuario: require("./models/Usuario").init(sequelize),
  };

module.exports = {
    modelos,
    sequelize,
  };


