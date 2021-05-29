const { Model, DataTypes } = require('sequelize');

class Projeto extends Model {
    static init(sequelize) {
        super.init({
            nome_projetos: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            descricao_projetos: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            data_ini: {
                type: DataTypes.DATEONLY,
                allowNull: true,
            },
            data_fim: {
                type: DataTypes.DATEONLY,
                allowNull: true,
            },

            carga_horaria: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            status: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
                allowNull: false,
            }

        }, { sequelize })
    }
    static associate(models) { return models }


}

module.exports = Projeto;