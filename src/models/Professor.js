const { Model, DataTypes } = require('sequelize');

class Professor extends Model {
  static init(sequelize) {
    super.init({
      nomeProfessor: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      dataNascProfessor: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      cpfProfessor: {
        type: DataTypes.INTEGER,
        allowNull: false,
   
      },
      enderecoProfessor: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      cepProfessor: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rgProfessor: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      telefoneProfessor: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      emailProfessor: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    }, { sequelize })
  }

  static associate(models) {
    this.hasMany(models.Endereco, { foreignKey: 'idEndereco', as: 'endereco' });
    this.hasMany(models.Projeto, { foreignKey: 'idProjeto', as: 'projeto' });
    this.hasMany(models.Vinculo, { foreignKey: 'idVinculo', as: 'vinculo' });
    this.hasMany(models.Regime, { foreignKey: 'idRegime', as: 'regime' });
    this.hasMany(models.EmpregoPublico, { foreignKey: 'idEmpregoPublico', as: 'emprego publico' });
    this.hasMany(models.TipoContrato, { foreignKey: 'idTipoContrato', as: 'tipo contrato' });
    this.hasMany(models.Titulacao, { foreignKey: 'idTitulacao', as: 'titulacao' });
  }
};

module.exports = Professor;