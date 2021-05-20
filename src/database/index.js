const { Sequelize } = require('sequelize');

const dbConfig = require('../config/database');
const Aluno = require('../models/Aluno');
const AreaPesquisa = require('../models/AreaPesquisa');
const Comissao = require('../models/Comissao');
const CursoExtensao = require('../models/CursoExtensao');
const EmpregoPublico = require('../models/EmpregoPublico');
const Endereco = require('../models/Endereco');
const Horario = require('../models/Horario');
const Regime = require('../models/Regime');
const RegistroSubstituicao = require('../models/RegistroSubstituicao');
const TipoContrato = require('../models/TipoContrato');
const Titulacao = require('../models/Titulacao');
const Turma = require('../models/Turma');

const connection = new Sequelize(dbConfig);

CursoExtensao.init(connection);
Aluno.init(connection);
AreaPesquisa.init(connection);
Comissao.init(connection);
EmpregoPublico.init(connection);
Endereco.init(connection);
Horario.init(connection);
Regime.init(connection);
RegistroSubstituicao.init(connection);
TipoContrato.init(connection);
Titulacao.init(connection);
Turma.init(connection);

connection.sync({ alter: true });

module.exports = connection;