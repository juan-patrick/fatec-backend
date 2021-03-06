const { Model, DataTypes } = require('sequelize');

class EmpregoPublico extends Model {
  static init(sequelize) {
    super.init({
      cargoPublico: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      situacao: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      }
    }, { sequelize })
  }

  static associate(models) { return models }
}

module.exports = EmpregoPublico;