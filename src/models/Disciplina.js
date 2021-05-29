const { Model, DataTypes } = require('sequelize');

class Disciplina extends Model {
  static init(sequelize) {
    super.init(
      {
        nomeDisciplina: {
          type: DataTypes.STRING(),
          allowNull: false,
        },
        descricaoDisciplina: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        cargaHoraria: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        objetivoDisciplina: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        ementaDisciplina: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        refenciaBasicaDisciplina: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        refenciaComplementarDisciplina: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        codSigaDisciplina: {
          type: DataTypes.STRING,
          allowNull: false,
        }
      },
      { sequelize })
  }
}

module.exports = Disciplina;
