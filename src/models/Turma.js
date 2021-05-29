const { Model, DataTypes } = require('sequelize');

class Turma extends Model {
  static init(sequelize) {
    super.init({
      nomeTurma: {
        type: DataTypes.STRING(20),
        allowNull: false,
      }
    }, { sequelize })
  }

  static associate(models) { return models }
}

module.exports = Turma;