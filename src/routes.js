const express = require('express');
const CursoExtensaoController = require('./controllers/CursoExtensaoController');

const routes = express.Router();

routes.get('/cursoextensao', CursoExtensaoController.index);
routes.get('/cursoextensao/:cursoExtensaoId', CursoExtensaoController.show);
routes.post('/cursoextensao', CursoExtensaoController.store);
routes.delete('/cursoextensao/:cursoExtensaoId', CursoExtensaoController.delete);
routes.put('/cursoextensao/:cursoExtensaoId', CursoExtensaoController.update);

module.exports = routes;