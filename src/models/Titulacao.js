const { Model, DataTypes } = require('sequelize');

class Titulacao extends Model {
  static init(sequelize) {
    super.init({
      nomeTitulacao: {
        type: DataTypes.STRING(45),
        allowNull: false,
      }
    }, { sequelize })
  }

  static associate(models) { return models }
}

module.exports = Titulacao;