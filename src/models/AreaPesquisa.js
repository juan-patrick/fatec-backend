const { Model, DataTypes } = require('sequelize');

class AreaPesquisa extends Model {
  static init(sequelize) {
    super.init({
      nomePesquisa: {
        type: DataTypes.STRING(45),
        allowNull: false,
      }
    }, { sequelize })
  }

  static associate(models) { return models }
  // static associate(models) { return this.hasMany(Projeto, { foreignKey: 'tb_area_pesquisa_idarea_pesquisa' }) }

}

module.exports = AreaPesquisa;