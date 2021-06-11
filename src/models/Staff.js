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

  static associate(models) {
    this.belongsToMany(models.Eventos, { foreignKey: 'IdStaff', through: 'tb_eventos_has_tb_staff', as: 'eventos' });
  }
}

module.exports = Staff;