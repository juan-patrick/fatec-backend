const { Model, DataTypes } = require('sequelize');
const { hashSync } = require('bcryptjs');

class Usuario extends Model {
  static init(sequelize) {
    super.init({
      nomeUsuario: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      senhaUsuario: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      emailUsuario: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      permissao: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      ultimoLogin: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      token: {
        type: DataTypes.STRING,
        defaultValue: '',
      },
    },
      {
        sequelize,
        hooks: {
          beforeCreate: (usuario, options) => {
            usuario.senhaUsuario = hashSync(usuario.senhaUsuario, 1);
          },         
          beforeBulkCreate: (usuario, options) => {
            usuario.senhaUsuario = hashSync(usuario.senhaUsuario, 1);
          },
          beforeBulkUpdate: (usuario, options) => {
            if (usuario.senhaUsuario)
              usuario.senhaUsuario = pass = hashSync(senhaUsuario, 1);
          },
        },
      },
    )
  }

  static associate(models) { return models }
}

module.exports = Usuario;