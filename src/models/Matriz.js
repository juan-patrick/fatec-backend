const { Model, DataTypes } = require('sequelize');

class Matriz extends Model {
  static init(sequelize) {
    super.init(
      {
        descricaoMatriz: {
          type: DataTypes.STRING(45),
          allowNull: false,
        },
        anoMatriz: {
          type: DataTypes.STRING(),
          allowNull: false,
        },
        statusMatriz: {
          type: DataTypes.BOOLEAN,
          defaultValue: true,
          allowNull: false,
        },
        duracaoHoraAula: {
          type: DataTypes.STRING(),
          allowNull: false,
        },
        periodoLetivo: {
          type: DataTypes.STRING(),
          allowNull: false,
        },
        turnoFuncionamento: {
          type: DataTypes.STRING(),
          allowNull: false,
        },
        prazoIntegralizacaoMin: {
          type: DataTypes.STRING(),
          allowNull: false,
        },
        prazoIntegralizacaoMax: {
          type: DataTypes.STRING(),
          allowNull: false,
        },
        regimeMatricula: {
          type: DataTypes.STRING(),
          allowNull: false,
        },
        competencia: {
          type: DataTypes.STRING(),
          allowNull: false,
        },
        formaAcesso: {
          type: DataTypes.STRING(),
          allowNull: false,
        },
        eixoTecnologico: {
          type: DataTypes.STRING(),
          allowNull: false,
        },
        competenciasGerais: {
          type: DataTypes.STRING(),
          allowNull: false,
        },
        competenciaEspecificas: {
          type: DataTypes.STRING(),
          allowNull: false,
        },
        perfilProfissional: {
          type: DataTypes.STRING(),
          allowNull: false,
        },
        areasAtuacao: {
          type: DataTypes.STRING(),
          allowNull: false,
        },
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Disciplina, {
      foreignKey: 'idMatriz',
      through: 'tb_disciplina_has_tb_matriz_curricular',
      as: 'matriz',
    });
  }
}

module.exports = Matriz;
