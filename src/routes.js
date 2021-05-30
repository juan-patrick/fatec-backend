const express = require('express');

const AlunoController = require('./controllers/AlunoController');
const AreaPesquisaController = require('./controllers/AreaPesquisaController');
const CertificadoController = require('./controllers/CertificadoController');
const ComissaoController = require('./controllers/ComissaoController');
const CursoController = require('./controllers/CursoController');
const CursoExtensaoController = require('./controllers/CursoExtensaoController');
const DisciplinaController = require('./controllers/DisciplinaController');
const EmpregoPublicoController = require('./controllers/EmpregoPublicoController');
const EnderecoController = require('./controllers/EnderecoController');
const HorarioController = require('./controllers/HorarioController');
const InatividadeController = require('./controllers/InatividadeController');
const ProfessorController = require('./controllers/ProfessorController');
const ProjetoController = require('./controllers/ProjetoController');
const RegimeController = require('./controllers/RegimeController');
const RegistroSubstituicaoController = require('./controllers/RegistroSubstituicaoController');
const StaffController = require('./controllers/StaffController');
const TipoContratoController = require('./controllers/TipoContratoController');
const TitulacaoController = require('./controllers/TitulacaoController');
const TurmaController = require('./controllers/TurmaController');
const UsuarioController = require('./controllers/UsuarioController');
const VinculoController = require('./controllers/VinculoController');
const {
  VinculoValidator,
  StaffValidator,
  UsuarioValidator,
  TurmaValidator,
  ProjetoValidator,
  RegistroSubstituicaoValidator,
  ProfessorValidator,
  InatividadeValidator,
  EnderecoValidator,
  HorarioValidator,
  CursoValidator,
  ComissaoValidator,
  AreaPesquisaValidator,
  CertificadoValidator,
  AlunoValidator,
  CursoExtensaoValidator,
  DisciplinaValidator,
  EmpregoPublicoValidator,
  TitulacaoValidator,
  TipoContratoValidator,
  RegimeValidator,
} = require('./middlewares/Validator');

const routes = express.Router();

routes.get('/cursoExtensao', CursoExtensaoController.index);
routes.get('/cursoExtensao/:cursoExtensaoId', CursoExtensaoController.show);
routes.post(
  '/cursoExtensao',
  CursoExtensaoValidator,
  CursoExtensaoController.store
);
routes.delete(
  '/cursoExtensao/:cursoExtensaoId',
  CursoExtensaoController.delete
);
routes.put(
  '/cursoExtensao/:cursoExtensaoId',
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

routes.get('/aluno', AlunoController.index);
routes.get('/aluno/:alunoId', AlunoController.show);
routes.post('/aluno', AlunoValidator, AlunoController.store);
routes.delete('/aluno/:alunoId', AlunoController.delete);
routes.put('/aluno/:alunoId', AlunoValidator, AlunoController.update);

routes.get('/areaPesquisa', AreaPesquisaController.index);
routes.get('/areaPesquisa/:areaPesquisaId', AreaPesquisaController.show);
routes.post(
  '/areaPesquisa',
  AreaPesquisaValidator,
  AreaPesquisaController.store
);
routes.delete('/areaPesquisa/:areaPesquisaId', AreaPesquisaController.delete);
routes.put(
  '/areaPesquisa/:areaPesquisaId',
  AreaPesquisaValidator,
  AreaPesquisaController.update
);

routes.get('/certificado', CertificadoController.index);
routes.get('/certificado/:certificadoId', CertificadoController.show);
routes.post('/certificado', CertificadoValidator, CertificadoController.store);
routes.delete('/certificado/:certificadoId', CertificadoController.delete);
routes.put(
  '/certificado/:certificadoId',
  CertificadoValidator,
  CertificadoController.update
);

routes.get('/comissao', ComissaoController.index);
routes.get('/comissao/:comissaoId', ComissaoController.show);
routes.post('/comissao', ComissaoValidator, ComissaoController.store);
routes.delete('/comissao/:comissaoId', ComissaoController.delete);
routes.put(
  '/comissao/:comissaoId',
  ComissaoValidator,
  ComissaoController.update
);

routes.get('/curso', CursoController.index);
routes.get('/curso/:cursoId', CursoController.show);
routes.post('/curso', CursoValidator, CursoController.store);
routes.delete('/curso/:cursoId', CursoController.delete);
routes.put('/curso/:cursoId', CursoValidator, CursoController.update);

routes.get('/endereco', EnderecoController.index);
routes.get('/endereco/:enderecoId', EnderecoController.show);
routes.post('/endereco', EnderecoValidator, EnderecoController.store);
routes.delete('/endereco/:enderecoId', EnderecoController.delete);
routes.put(
  '/endereco/:enderecoId',
  EnderecoValidator,
  EnderecoController.update
);

routes.get('/horario', HorarioController.index);
routes.get('/horario/:horarioId', HorarioController.show);
routes.post('/horario', HorarioValidator, HorarioController.store);
routes.delete('/horario/:horarioId', HorarioController.delete);
routes.put('/horario/:horarioId', HorarioValidator, HorarioController.update);

routes.get('/inatividade', InatividadeController.index);
routes.get('/inatividade/:inatividadeId', InatividadeController.show);
routes.post('/inatividade', InatividadeValidator, InatividadeController.store);
routes.delete('/inatividade/:inatividadeId', InatividadeController.delete);
routes.put(
  '/inatividade/:inatividadeId',
  InatividadeValidator,
  InatividadeController.update
);

routes.get('/professor', ProfessorController.index);
routes.get('/professor/:professorId', ProfessorController.show);
routes.post('/professor', ProfessorValidator, ProfessorController.store);
routes.delete('/professor/:professorId', ProfessorController.delete);
routes.put(
  '/professor/:professorId',
  ProfessorValidator,
  ProfessorController.update
);

routes.get('/projeto', ProjetoController.index);
routes.get('/projeto/:projetoId', ProjetoController.show);
routes.post('/projeto', ProjetoValidator, ProjetoController.store);
routes.delete('/projeto/:projetoId', ProjetoController.delete);
routes.put('/projeto/:projetoId', ProjetoValidator, ProjetoController.update);

routes.get('/registroSubstituicao', RegistroSubstituicaoController.index);
routes.get(
  '/registroSubstituicao/:registroSubstituicaoId',
  RegistroSubstituicaoController.show
);
routes.post(
  '/registroSubstituicao',
  RegistroSubstituicaoValidator,
  RegistroSubstituicaoController.store
);
routes.delete(
  '/registroSubstituicao/:registroSubstituicaoId',
  RegistroSubstituicaoController.delete
);
routes.put(
  '/registroSubstituicao/:registroSubstituicaoId',
  RegistroSubstituicaoValidator,
  RegistroSubstituicaoController.update
);

routes.get('/staff', StaffController.index);
routes.get('/staff/:staffId', StaffController.show);
routes.post('/staff', StaffValidator, StaffController.store);
routes.delete('/staff/:staffId', StaffController.delete);
routes.put('/staff/:staffId', StaffValidator, StaffController.update);

routes.get('/turma', TurmaController.index);
routes.get('/turma/:turmaId', TurmaController.show);
routes.post('/turma', TurmaValidator, TurmaController.store);
routes.delete('/turma/:turmaId', TurmaController.delete);
routes.put('/turma/:turmaId', TurmaValidator, TurmaController.update);

routes.get('/usuario', UsuarioController.index);
routes.get('/usuario/:usuarioId', UsuarioController.show);
routes.post('/usuario', UsuarioValidator, UsuarioController.store);
routes.delete('/usuario/:usuarioId', UsuarioController.delete);
routes.put('/usuario/:usuarioId', UsuarioValidator, UsuarioController.update);

routes.get('/vinculo', VinculoController.index);
routes.get('/vinculo/:vinculoId', VinculoController.show);
routes.post('/vinculo', VinculoValidator, VinculoController.store);
routes.delete('/vinculo/:vinculoId', VinculoController.delete);
routes.put('/vinculo/:vinculoId', VinculoValidator, VinculoController.update);

module.exports = routes;
