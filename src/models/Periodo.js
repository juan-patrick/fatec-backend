const { Model, DataTypes } = require('sequelize');

class Periodo extends Model {
  static init(sequelize) {
    super.init({
      nome_periodo: {
        type: DataTypes.STRING(45),
        allowNull: false,
      }
    }, { sequelize })
  }

  static associate(models) { return models }
}

module.exports = Periodo;