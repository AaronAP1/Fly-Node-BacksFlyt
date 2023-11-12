const { Model, DataTypes } = require('sequelize');


const PERSON_TABLE = 'users';

class Person extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PERSON_TABLE,
            modelName: 'Person',
            timestamps: true
        };
    }
}

const PersonSchema = {
    id_user: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    correo: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'correo'
    },
    contraseña: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'contraseña'
    }
};

Person.associate = (models) => {
    // Asociación "hasMany" con el modelo de Vuelo
    User.hasMany(models.Vuelos, { foreignKey: 'id_user' });
  };

module.exports = {Person, PersonSchema};
