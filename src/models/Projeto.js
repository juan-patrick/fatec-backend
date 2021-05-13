const { Model, DataTypes } = require('sequelize');

class Projeto extends Model {
  static init(sequelize) {
    super.init({
      nome_projetos: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      descricao_projetos: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      data_ini: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      data_fim: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: true,
      },
      carga_horaria: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      situacao_projetos: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
    }, { sequelize })
  }

  static associate(models) { return models }
}

module.exports = Projeto;