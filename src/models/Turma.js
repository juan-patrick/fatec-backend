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

  static associate(models) {
    this.belongsToMany(models.Horario, { foreignKey: 'IdTurma', through: 'tb_grade_curricular', as: 'horario' });
  }
}

module.exports = Turma;