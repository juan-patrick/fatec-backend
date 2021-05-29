const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
  static init(sequelize) {
    super.init({
      nomeUsuario: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      senhaUsuario: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      emailUsuario: {
        type: DataTypes.STRING(45),
        allowNull: false,
      }
    }, { sequelize })
  }

  static associate(models) { return models }
}

module.exports = Usuario;