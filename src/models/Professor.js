const { Model, DataTypes } = require('sequelize');

class Professor extends Model {
  static init(sequelize) {
    super.init({
      nome_professor: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      idade_professor: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      data_nasc: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      CPF_professor: {
        type: DataTypes.STRING(20),
        allowNull: false,
   
      },
      RG_professor: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      celular_professor: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      telefone_professor: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      email_professor: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      email_inst_professor: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
    }, { sequelize })
  }

  static associate(models) { return models }
};

module.exports = Professor;