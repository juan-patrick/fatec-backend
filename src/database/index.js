const { Sequelize } = require('sequelize');

const dbConfig = require('../config/database');
const Curso = require('../models/Curso');
const CursoExtensao = require('../models/CursoExtensao');

const connection = new Sequelize(dbConfig);

CursoExtensao.init(connection);
Curso.init(connection);
connection.sync({ alter: true });

module.exports = connection;
