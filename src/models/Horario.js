const { Model, DataTypes } = require('sequelize');

class Horario extends Model {
  static init(sequelize) {
    super.init({
      ini_horario: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      fim_horario: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    }, { sequelize })
  }

  static associate(models) { return models }
}

module.exports = Horario;