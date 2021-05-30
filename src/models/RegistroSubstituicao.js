const { Model, DataTypes } = require('sequelize');

class RegistroSubstituicao extends Model {
  static init(sequelize) {
    super.init({
      dataInicio: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      dataFim: {
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