const { Model, DataTypes } = require('sequelize');

class Inatividade extends Model {
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
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    }, { sequelize })
  }

  static associate(models) { return models }
};

module.exports = Inatividade;
