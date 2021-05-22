const { Model, DataTypes } = require('sequelize');

class Certificado extends Model {
  static init(sequelize) {
    super.init({
      nome_aluno: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nome_palestrante: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      data_palestra: {
        type: DataTypes.DATE,
        allowNull: false,
      }
    }, { sequelize })
  }

  static associate(models) { return models }
}

module.exports = Certificado;