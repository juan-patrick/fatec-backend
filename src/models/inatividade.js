const { Model, DataTypes } = require('sequelize');

class Inatividade extends Model {
  static init(sequelize) {
    super.init({
      data_ini: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      data_ini: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      data_fin: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      motivo: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    }, { sequelize })
  }

  static associate(models) { return models }
};

module.exports = Inatividade;
	