const { Model, DataTypes } = require('sequelize');

class Inatividade extends Model {
  static init(sequelize) {
    super.init({
      dataInicio: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      dataFim: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      motivo: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    }, { sequelize })
  }

  static associate(models) {
    this.hasMany(models.Professor, { foreignKey: 'idProfessor', as: 'professor' });
  }
};

module.exports = Inatividade;
