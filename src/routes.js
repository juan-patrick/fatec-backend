const express = require('express');

const CursoExtensaoController = require('./controllers/CursoExtensaoController');
const DisciplinaController = require('./controllers/DisciplinaController');
const EmpregoPublicoController = require('./controllers/EmpregoPublicoController');
const RegimeController = require('./controllers/RegimeController');
const TipoContratoController = require('./controllers/TipoContratoController');
const TitulacaoController = require('./controllers/TitulacaoController');
const ProjetoController = require('./controllers/ProjetoController');
const TurmaController = require('./controllers/TurmaController');
const HorarioController = require('./controllers/HorarioController');
const CertifiadoController = require('./controllers/CertificadoController');
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
  CertificadoValidator,
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

routes.get('/certificado', CertifiadoController.index);
routes.get('/certificado/:certificadoId', CertifiadoController.show);
routes.post('/certificado', CertificadoValidator, CertifiadoController.store);
routes.delete('/certificado/:certificadoId', CertifiadoController.delete);
routes.put('/certificado/:certificadoId', CertificadoValidator, CertifiadoController.update);

module.exports = routes;