const { Model, DataTypes } = require('sequelize');

class Projeto extends Model {
  static init(sequelize) {
    super.init({
      nomeProjetos: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      descricaoProjetos: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      dataInicial: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      dataFim: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: true,
      },
      cargaHoraria: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      situacaoProjetos: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
    }, { sequelize })
  }
}

module.exports = Projeto;