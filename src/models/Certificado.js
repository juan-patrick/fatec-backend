const { Model, DataTypes } = require('sequelize');

class Certificado extends Model {
  static init(sequelize) {
    super.init({
      nomeAlunoCert: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nomePalestrante: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dataPalestra: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      }
    }, { sequelize })
  }

  static associate(models) { return models }
}

module.exports = Certificado;