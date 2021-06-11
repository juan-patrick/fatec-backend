const express = require('express');

const CursoExtensaoController = require('./controllers/CursoExtensaoController');
const DisciplinaController = require('./controllers/DisciplinaController');
const EmpregoPublicoController = require('./controllers/EmpregoPublicoController');
const HorarioController = require('./controllers/HorarioController');
const ProjetoController = require('./controllers/ProjetoController');
const RegimeController = require('./controllers/RegimeController');
const TipoContratoController = require('./controllers/TipoContratoController');
const TitulacaoController = require('./controllers/TitulacaoController');
const TurmaController = require('./controllers/TurmaController');
const LoginController = require('./controllers/LoginController');

const { Auth } = require('./middlewares/Auth');

const {
  CursoExtensaoValidator,
  DisciplinaValidator,
  EmpregoPublicoValidator,
  TitulacaoValidator,
  TipoContratoValidator,
  RegimeValidator,
  ProjetoValidator,
  TurmaValidator,
  HorarioValidator,
} = require('./middlewares/Validator');

const routes = express.Router();



routes.post('/login/signIn', LoginController.store);

routes.use(Auth);


routes.delete('/logout', LoginController.delete);

routes.get('/sessions/check', async (req, res) => {
  const { tokenPerm } = req;
  return res.status(200).json({ auth: true, perm: tokenPerm });
});

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

routes.get('/disciplina', DisciplinaController.index);
routes.get('/disciplina/:disciplinaId', DisciplinaController.show);
routes.post('/disciplina', DisciplinaValidator, DisciplinaController.store);
routes.delete('/disciplina/:disciplinaId', DisciplinaController.delete);
routes.put(
  '/disciplina/:disciplinaId',
  DisciplinaValidator,
  DisciplinaController.update
);

routes.get('/empregoPublico', EmpregoPublicoController.index);
routes.get('/empregoPublico/:empregopublicoId', EmpregoPublicoController.show);
routes.post(
  '/empregoPublico',
  EmpregoPublicoValidator,
  EmpregoPublicoController.store
);
routes.delete(
  '/empregoPublico/:empregopublicoId',
  EmpregoPublicoController.delete
);
routes.put(
  '/empregoPublico/:empregopublicoId',
  EmpregoPublicoValidator,
  EmpregoPublicoController.update
);

routes.get('/titulacao', TitulacaoController.index);
routes.get('/titulacao/:titulacaoId', TitulacaoController.show);
routes.post('/titulacao', TitulacaoValidator, TitulacaoController.store);
routes.delete('/titulacao/:titulacaoId', TitulacaoController.delete);
routes.put(
  '/titulacao/:titulacaoId',
  TitulacaoValidator,
  TitulacaoController.update
);

routes.get('/tipoContrato', TipoContratoController.index);
routes.get('/tipoContrato/:tipocontratoId', TipoContratoController.show);
routes.post(
  '/tipoContrato',
  TipoContratoValidator,
  TipoContratoController.store
);
routes.delete('/tipoContrato/:tipocontratoId', TipoContratoController.delete);
routes.put(
  '/tipoContrato/:tipocontratoId',
  TipoContratoValidator,
  TipoContratoController.update
);

routes.get('/regime', RegimeController.index);
routes.get('/regime/:regimeId', RegimeController.show);
routes.post('/regime', RegimeValidator, RegimeController.store);
routes.delete('/regime/:regimeId', RegimeController.delete);
routes.put('/regime/:regimeId', RegimeValidator, RegimeController.update);

routes.get('/regime', RegimeController.index);
routes.get('/regime/:regimeId', RegimeController.show);
routes.post('/regime', RegimeValidator, RegimeController.store);
routes.delete('/regime/:regimeId', RegimeController.delete);
routes.put('/regime/:regimeId', RegimeValidator, RegimeController.update);

routes.get('/projeto', ProjetoController.index);
routes.get('/projeto/:projetoId', ProjetoController.show);
routes.post('/projeto', ProjetoValidator, ProjetoController.store);
routes.delete('/projeto/:projetoId', ProjetoController.delete);
routes.put('/projeto/:projetoId', ProjetoValidator, ProjetoController.update);

routes.get('/turma', TurmaController.index);
routes.get('/turma/:turmaId', TurmaController.show);
routes.post('/turma', TurmaValidator, TurmaController.store);
routes.delete('/turma/:turmaId', TurmaController.delete);
routes.put('/turma/:turmaId', TurmaValidator, TurmaController.update);

routes.get('/horario', HorarioController.index);
routes.get('/horario/:horarioId', HorarioController.show);
routes.post('/horario', HorarioValidator, HorarioController.store);
routes.delete('/horario/:horarioId', HorarioController.delete);
routes.put('/horario/:horarioId', HorarioValidator, HorarioController.update);

module.exports = routes;