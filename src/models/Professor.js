const { Model, DataTypes } = require('sequelize');

class Professor extends Model {
  static init(sequelize) {
    super.init({
      nomeProfessor: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      idadeProfessor: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      dataNascProfessor: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      cpfProfessor: {
        type: DataTypes.STRING(20),
        allowNull: false,
   
      },
      rgProfessor: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      celularProfessor: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      telefoneProfessor: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      emailProfessor: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      emailInstituProfessor: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
    }, { sequelize })
  }

  static associate(models) { return models }
};

module.exports = Professor;