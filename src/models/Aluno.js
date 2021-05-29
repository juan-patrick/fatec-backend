const { Model, DataTypes } = require('sequelize');

class Aluno extends Model {
  static init(sequelize) {
    super.init({
      raAluno: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      nomeAluno: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      idadeAluno: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      dataNascAluno: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      cpfAluno: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      rgAluno: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      situacaoAluno: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
      celularAluno: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      telefoneAluno: {
        type: DataTypes.STRING(20),
      },
      emailAluno: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      emailInstituAluno: {
        type: DataTypes.STRING(45),
        allowNull: false,
      }
    }, { sequelize })
  }

  static associate(models) { return models }
}

module.exports = Aluno;