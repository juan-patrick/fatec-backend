const { Model, DataTypes } = require('sequelize');

class Vinculo extends Model {
  static init(sequelize) {
    super.init({
      tipo_vinculo: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
    }, { sequelize })
  }

  static associate(models) { return models }
};

module.exports = Vinculo;
