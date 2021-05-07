const { Sequelize } = require('sequelize');

const CursoExtensao = require('../models/CursoExtensao');

const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);

CursoExtensao.init(connection);

connection.sync({ alter: true })

module.exports = connection;