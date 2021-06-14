const { Model, DataTypes } = require('sequelize');

class Eventos extends Model {
  static init(sequelize) {
    super.init({
      nomeEventos: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      descricaoEventos: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      dataInicialEve: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      dataFimEve: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      cargaHorariaEve: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      horarioInicialEve: {
          type: DataTypes.TIME,
          allowNull: false,
      },
      horarioFinalEve: {
          type: DataTypes.TIME,
          allowNull: false,
      },
    }, { sequelize })
  }
}

module.exports = Eventos;