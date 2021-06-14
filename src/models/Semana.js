const { Model, DataTypes } = require('sequelize');

class Semana extends Model {
  static init(sequelize) {
    super.init({
      nome_semana: {
        type: DataTypes.STRING(45),
        allowNull: false,
      }
    }, { sequelize })
  }

  static associate(models) { return models }
}

module.exports = Semana;