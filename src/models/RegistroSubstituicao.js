const { Model, DataTypes } = require('sequelize');

class RegistroSubstituicao extends Model {
  static init(sequelize) {
    super.init({
      data_ini: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      data_fim: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      motivo: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    }, { sequelize })
  }

  static associate(models) { return models }
}

module.exports = RegistroSubstituicao;