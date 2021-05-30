const { Model, DataTypes } = require('sequelize');

class Curso extends Model {
  static init(sequelize) {
    super.init(
      {
        nomeCurso: {
          type: DataTypes.STRING(45),
          allowNull: false,
        },
        duracaoCurso: {
          type: DataTypes.INTEGER(45),
          allowNull: false,
        },
        descricaoCurso: {
          type: DataTypes.STRING(45),
          allowNull: false,
        },
        situacaoCurso: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: true,
        },
        codMec: {
          type: DataTypes.STRING(45),
          allowNull: false,
        },
      },
      { sequelize }
    );
  }
}

module.exports = Curso;
