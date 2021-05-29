const { Model, DataTypes } = require('sequelize');

class TipoContrato extends Model {
  static init(sequelize) {
    super.init({
      tipoContrato: {
        type: DataTypes.STRING(45),
        allowNull: false,
      }
    }, { sequelize })
  }

  static associate(models) { return models }
}

module.exports = TipoContrato;