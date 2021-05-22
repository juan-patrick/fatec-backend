const express = require('express');

const CursoExtensaoController = require('./controllers/CursoExtensaoController');
const CursoController = require('./controllers/CursoController');
const {
  CursoExtensaoValidator,
  CursoValidator,
} = require('./middlewares/Validator');

const routes = express.Router();

routes.get('/cursoextensao', CursoExtensaoController.index);
routes.get('/cursoextensao/:cursoExtensaoId', CursoExtensaoController.show);
routes.post(
  '/cursoextensao',
  CursoExtensaoValidator,
  CursoExtensaoController.store
);
routes.delete(
  '/cursoextensao/:cursoExtensaoId',
  CursoExtensaoController.delete
);
routes.put(
  '/cursoextensao/:cursoExtensaoId',
  CursoExtensaoValidator,
  CursoExtensaoController.update
);

routes.get('/cursos', CursoController.index);
routes.get('/cursos/:cursoId', CursoController.show);
routes.post('/cursos', CursoValidator, CursoController.store);
routes.delete('/cursos/:cursoId', CursoController.delete);
routes.put('/cursos/:cursoId', CursoValidator, CursoController.update);

module.exports = routes;
