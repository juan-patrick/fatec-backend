const { Model, DataTypes } = require('sequelize');

class Endereco extends Model {
  static init(sequelize) {
    super.init({
      cepEndereco: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      ruaEndereco: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      bairroEndereco: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      cidadeEndereco: {
        type: DataTypes.STRING(45),
        allowNull: false,
        defaultValue: true,
      },
      numeroEndereco: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      complementoEndereco: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
    }, { sequelize })
  }

  static associate(models) { return models }
}

module.exports = Endereco;