const { Sequelize } = require('sequelize');

const dbConfig = require('../config/database');
const CursoExtensao = require('../models/CursoExtensao');

const connection = new Sequelize(dbConfig);

CursoExtensao.init(connection);

connection.sync({ alter: true });

module.exports = connection;