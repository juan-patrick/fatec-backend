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
        type: DataTypes.DATE,
        allowNull: false,
      },
      dataFim: {
        type: DataTypes.DATE,
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

  static associate(models) { return models }
}

module.exports = Projeto;