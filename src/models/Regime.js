const { Model, DataTypes } = require('sequelize');

class Regime extends Model {
  static init(sequelize) {
    super.init({
      tipo_regime: {
        type: DataTypes.STRING(45),
        allowNull: false,
      }
    }, { sequelize })
  }

  static associate(models) { return models }
}

module.exports = Regime;