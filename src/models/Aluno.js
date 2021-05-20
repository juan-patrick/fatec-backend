const { Model, DataTypes } = require('sequelize');

class Aluno extends Model {
  static init(sequelize) {
    super.init({
      ra_aluno: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      nome_aluno: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      data_nasc: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      CPF_aluno: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      RG_aluno: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      situacao_aluno: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
      celular_aluno: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      telefone_aluno: {
        type: DataTypes.STRING(20),
      },
      email_aluno: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      email_inst_aluno: {
        type: DataTypes.STRING(45),
        allowNull: false,
      }
    }, { sequelize })
  }

  static associate(models) { return models }
}

module.exports = Aluno;