const { Model, DataTypes } = require('sequelize');

class CursoExtensao extends Model {
  static init(sequelize) {
    super.init({
      tipo_extensao: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      nome_extensao: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      }
    }, { sequelize })
  }
  //static associate(models) { this.hasMany(Projeto, { foreignKey: 'tb_curso_extensao_idcurso_extensao' }) }

}

module.exports = CursoExtensao;