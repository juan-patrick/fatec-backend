const { Model, DataTypes } = require('sequelize');

class Horario extends Model {
  static init(sequelize) {
    super.init({
      horarioInicio: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      horarioFim: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    }, { sequelize })
  }

  static associate(models) { return models }
}

module.exports = Horario;