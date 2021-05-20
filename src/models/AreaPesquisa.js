const { Model, DataTypes } = require('sequelize');

class AreaPesquisa extends Model {
  static init(sequelize) {
    super.init({
      nome_pesquisa: {
        type: DataTypes.STRING(45),
        allowNull: false,
      }
    }, { sequelize })
  }

  static associate(models) { return models }
}

module.exports = AreaPesquisa;