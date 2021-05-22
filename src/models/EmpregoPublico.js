const { Model, DataTypes } = require('sequelize');

class EmpregoPublico extends Model {
  static init(sequelize) {
    super.init({
      cargo_publico: {
        type: DataTypes.STRING(45),
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