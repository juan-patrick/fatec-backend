const Yup = require('yup');

module.exports = {
  async CursoExtensaoValidator(req, res, next) {
    try {
      const schema = Yup.object().shape({
        nomeExtensao: Yup.string().max(45).required(),
        tipoExtensao: Yup.string().max(45).required(),
        status: Yup.bool(),
      });

      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Invalid data types to CursoExtensao' });
    }
  },
  async DisciplinaValidator(req, res, next) {
    try {
      const schema = Yup.object().shape({
        nomeDisciplina: Yup.string().required(),
        descricaoDisciplina: Yup.string().required(),
        cargaHoraria: Yup.string().required(),
        objetivoDisciplina: Yup.string().required(),
        ementaDisciplina: Yup.string().required(),
        refenciaBasicaDisciplina: Yup.string().required(),
        refenciaComplementarDisciplina: Yup.string().required(),
        codSigaDisciplina: Yup.string().required(),
      });

      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Invalid data types to Disciplina' });
    }
  },
  async MatrizValidator(req, res, next) {
    try {
      const schema = Yup.object().shape({
        descricaoMatriz: Yup.string().required(),
        anoMatriz: Yup.string().required(),
        statusMatriz: Yup.bool().required(),
        duracaoHoraAula: Yup.string().required(),
        periodoLetivo: Yup.string().required(),
        turnoFuncionamento: Yup.string().required(),
        prazoIntegralizacaoMin: Yup.string().required(),
        prazoIntegralizacaoMax: Yup.string().required(),
        regimeMatricula: Yup.string().required(),
        competencia: Yup.string().required(),
        formaAcesso: Yup.string().required(),
        eixoTecnologico: Yup.string().required(),
        competenciasGerais: Yup.string().required(),
        competenciaEspecificas: Yup.string().required(),
        perfilProfissional: Yup.string().required(),
        areasAtuacao: Yup.string().required(),
      });

      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Invalid data types to Matriz', err: error });
    }
  },
  async EmpregoPublicoValidator(req, res, next) {
    try {
      const schema = Yup.object().shape({
        cargoPublico: Yup.string(50).required(),
        situacao: Yup.bool(),
      });

      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Invalid data types to Emprego Publico' });
    }
  },
  async TitulacaoValidator(req, res, next) {
    try {
      const schema = Yup.object().shape({
        nomeTitulacao: Yup.string(45).required(),
      });

      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Invalid data types to Titulacao' });
    }
  },
  async TipoContratoValidator(req, res, next) {
    try {
      const schema = Yup.object().shape({
        tipoContrato: Yup.string(45).required(),
      });

      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Invalid data types to Tipo de Contrato' });
    }
  },
  async RegimeValidator(req, res, next) {
    try {
      const schema = Yup.object().shape({
        tipoRegime: Yup.string(45).required(),
      });

      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Invalid data types to Tipo de Regime' });
    }
  },
  async RegistroSituacaoValidator(req, res, next) {
    try {
      const schema = Yup.object().shape({
        dataInicial: Yup.date().required(),
        dataFim: Yup.date().required(),
        motivo: Yup.string().required(),
      });

      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Invalid data types to Registro Situacao' });
    }
  },
  async ComissaoValidator(req, res, next) {
    try {
      const schema = Yup.object().shape({
        nomeComissoes: Yup.string(45).required(),
        descricao: Yup.string(45).required(),
      });

      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Invalid data types to Comissao' });
    }
  },
  async AreaPesquisaValidator(req, res, next) {
    try {
      const schema = Yup.object().shape({
        nomePesquisa: Yup.string(45).required(),
      });

      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Invalid data types to Area de Pesquisa' });
    }
  },
  async ProjetoValidator(req, res, next) {
    try {
      const schema = Yup.object().shape({
        descricaoProjetos: Yup.string().max(255).required(),
        dataInicial: Yup.date().required(),
        dataFim: Yup.date().required(),
        cargaHoraria: Yup.number().required(),
        situacaoProjetos: Yup.bool().required(),
        nomeProjetos: Yup.string().max(255).required(),
      });
      await schema.validate(req.body, { abortEarly: false });
      return next();
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Invalid data types to Projetos' });
    }
  },
  async TurmaValidator(req, res, next) {
    try {
      const schema = Yup.object().shape({
        nomeTurma: Yup.string().max(20).required(),
      });
      await schema.validate(req.body, { abortEarly: false });
      return next();
    } catch (error) {
      return res.status(400).json({ message: 'Invalid data types to Turma' });
    }
  },
  async HorarioValidator(req, res, next) {
    try {
      const schema = Yup.object().shape({
        HorarioInicial: Yup.string().required(),
        HorarioFinal: Yup.string().required(),
      });
      await schema.validate(req.body, { abortEarly: false });
      return next();
    } catch (error) {
      return res.status(400).json({ message: 'Invalid data types to Horario' });
    }
  },
};
