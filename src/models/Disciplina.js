const { Model, DataTypes } = require('sequelize');

class Disciplina extends Model {
  static init(sequelize) {
    super.init(
      {
        nome_disciplina: {
          type: DataTypes.STRING(),
          allowNull: false,
        },
        descricao_disciplina: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        carga_horaria: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        objetivo_disciplina: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        ementa_disciplina: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        refenciaBasica_disciplina: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        refenciaComplementar_disciplina: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        codSiga_disciplina: {
          type: DataTypes.STRING,
          allowNull: false,
        }
      },
      { sequelize })
  }
}

module.exports = Disciplina;
