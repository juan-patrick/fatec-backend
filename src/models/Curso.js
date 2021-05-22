const { Model, DataTypes } = require('sequelize');

class Curso extends Model {
  static init(sequelize) {
    super.init(
      {
        nome_curso: {
          type: DataTypes.STRING(45),
          allowNull: false,
        },
        duracao_curso: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        descricao_curso: {
          type: DataTypes.STRING(45),
          allowNull: false,
        },
        situacao_curso: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: true,
        },
        cod_mec: {
          type: DataTypes.STRING(45),
          allowNull: false,
        },
      },
      { sequelize }
    );
  }
}

module.exports = Curso;
