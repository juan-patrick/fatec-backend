const { Model, DataTypes } = require('sequelize');

class Comissao extends Model {
  static init(sequelize) {
    super.init({
      nome_comissoes: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descricao: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    }, { sequelize })
  }

  static associate(models) { return models }
}

module.exports = Comissao;