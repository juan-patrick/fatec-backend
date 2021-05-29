const express = require('express');

const CursoExtensaoController = require('./controllers/CursoExtensaoController');
const CursoController = require('./controllers/CursoController');
const ProjetoController = require('./controllers/ProjetoController');
const {
  CursoExtensaoValidator,
  CursoValidator,
  ProjetoValidator,
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

routes.get('/projeto', ProjetoController.index);
routes.get('/projeto/:projetoId', ProjetoController.show);
routes.post('/projeto', ProjetoValidator, ProjetoController.store);
routes.delete('/projeto/:projetoId', ProjetoController.delete);
routes.put('/projeto/:projetoId', ProjetoValidator, ProjetoController.update);

module.exports = routes;
