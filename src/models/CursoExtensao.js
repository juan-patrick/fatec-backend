const { Model, DataTypes } = require('sequelize');

class CursoExtensao extends Model {
  static init(sequelize) {
    super.init({
      tipo_extensao: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      nome_extensao: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      data_ini: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      data_fim: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      hora_ini: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      hora_fim: {
        type: DataTypes.TIME,
        allowNull: false
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      }
    }, { sequelize })
  }
}

module.exports = CursoExtensao;