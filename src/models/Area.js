const { Model, DataTypes } = require('sequelize');

class Area extends Model {
    static init(sequelize){
        super.init({
            nomeArea: {
                type: DataTypes.STRING(),
                allowNull: false,
            },
            descricaoArea: {
                type: DataTypes.STRING(),
                allowNull: false,
            }
        },{sequelize})
    }
    static associate(models) { this.hasMany(models.Eventos, { foreignKey: 'IdArea' }) }


}
module.exports = Area;