const { Model, DataTypes } = require('sequelize');

class Horario extends Model {
  static init(sequelize) {
    super.init({
      HorarioInicial: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      HorarioFinal: {
        type: DataTypes.TIME,
        allowNull: false,
      },
    }, { sequelize })
  }

  static associate(models) {
    this.belongsToMany(models.Turma, { foreignKey: 'IdHorario', through: 'tb_grade_curricular', as: 'turma' });
  }
}

module.exports = Horario;