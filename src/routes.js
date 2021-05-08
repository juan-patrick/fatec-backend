const express = require('express');

const CursoExtensaoController = require('./controllers/CursoExtensaoController');

const { CursoExtensaoValidator } = require('./middlewares/Validator');

const routes = express.Router();

routes.get('/cursoextensao', CursoExtensaoController.index);
routes.get('/cursoextensao/:cursoExtensaoId', CursoExtensaoController.show);
routes.post('/cursoextensao', CursoExtensaoValidator, CursoExtensaoController.store);
routes.delete('/cursoextensao/:cursoExtensaoId', CursoExtensaoController.delete);
routes.put('/cursoextensao/:cursoExtensaoId', CursoExtensaoValidator, CursoExtensaoController.update);

module.exports = routes;