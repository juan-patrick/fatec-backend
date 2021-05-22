const { Model, DataTypes } = require('sequelize');

class Endereco extends Model {
  static init(sequelize) {
    super.init({
      CEP_endereco: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      rua_endereco: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      bairro_endereco: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      cidade_endereco: {
        type: DataTypes.STRING(45),
        allowNull: false,
        defaultValue: true,
      },
      numero_endereco: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      complemento_endereco: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
    }, { sequelize })
  }

  static associate(models) { return models }
}

module.exports = Endereco;