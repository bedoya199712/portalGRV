const { Model, DataTypes } = require("sequelize");

module.exports = class Usuario extends Model {
    static init(sequelize) {
        return super.init(
            {   

                nombre: {
                    type: DataTypes.STRING(1234),
                    allowNull: true,
                },
                numero: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                },
            },
            {
                sequelize,
                tableName: "prueba",
                modelName: "Usuario",
                timestamps: false,
            }
        );
    }

    //Relaciones entre tablas
    static relacionar(modelos) {

    }
};
