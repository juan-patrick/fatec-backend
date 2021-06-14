const { Model, DataTypes } = require('sequelize');

class CursoExtensao extends Model {
  static init(sequelize) {
    super.init({
      tipoExtensao: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      nomeExtensao: {
        type: DataTypes.STRING(45),
        allowNull: false,
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
