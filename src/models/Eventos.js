const { Model, DataTypes } = require('sequelize');

class Eventos extends Model {
  static init(sequelize) {
    super.init({
      nomeEventos: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      dataInicialEve: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      dataFimEVE: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      cargaHorariaEve: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      horarioInicial: {
          type: DataTypes.TIME,
          allowNull: false,
      },
      HorarioFinal: {
          type: DataTypes.TIME,
          allowNull: false,
      },
    }, { sequelize })
  }
  static associate(models) {
    this.belongsToMany(models.Staff, { foreignKey: 'IdEventos', through: 'tb_eventos_has_tb_staff', as: 'staff' });
  }
}

module.exports = Eventos;