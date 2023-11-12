const { Model, DataTypes } = require('sequelize');



const VUELO_TABLE = 'vuelos';

class Vuelos extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: VUELO_TABLE,
            modelName: 'vueloss',
            timestamps: true
        };
    }
}

const VuelosSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id'
    },
    nombre: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'nombre'
    },
    descripcion: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'descripcion'
    },
    fecha: {
        allowNull: true,
        type: DataTypes.DATE,
        field: 'fecha'
    },
    hora: {
        allowNull: true,
        type: DataTypes.TIME,
        field: 'hora'
    },
    lugar: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'lugar'
    },
    id_user: {
        allowNull: false,
        foreignKey: true,
        type: DataTypes.INTEGER,
        field: 'id_user'
    }
};


Vuelos.associate = (models) => {
    // Asociación "hasMany" con el modelo de Vuelo
    User.belongsTo(models.Persona, { foreignKey: 'id_user' });
  };

module.exports = {Vuelos, VuelosSchema};
