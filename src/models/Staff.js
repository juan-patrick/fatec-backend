const { Model, DataTypes } = require('sequelize');

class Staff extends Model {
  static init(sequelize) {
    super.init({
      nomeStaff: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, { sequelize })
  }

  static associate(models) { return models }
}

module.exports = Staff;