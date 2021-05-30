const Yup = require('yup');
const { date } = require('yup/lib/locale');

module.exports = {
  async CursoExtensaoValidator(req, res, next) {
    try {
      const schema = Yup.object().shape({
        nomeExtensao: Yup.string().max(45).required(),
        tipoExtensao: Yup.string().max(45).required(),
        status: Yup.bool().required(),
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
  async EmpregoPublicoValidator(req, res, next) {
    try {
      const schema = Yup.object().shape({
        cargoPublico: Yup.string(50).required(),
        situacao: Yup.bool().required(),
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
  async RegistroSubstituicaoValidator(req, res, next) {
    try {
      const schema = Yup.object().shape({
        dataInicio: Yup.date().required(),
        dataFim: Yup.date().required(),
        motivo: Yup.string().required(),
      });

      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Invalid data types to Registro Substituicao' });
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
  async TurmaValidator(req, res, next) {
    try {
      const schema = Yup.object().shape({
        nomeTurma: Yup.string(45).required(),
      });

      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (error) {
      return res.status(400).json({ message: 'Invalid data types to Turma' });
    }
  },
  async StaffValidator(req, res, next) {
    try {
      const schema = Yup.object().shape({
        nomeStaff: Yup.string(45).required(),
      });

      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (error) {
      return res.status(400).json({ message: 'Invalid data types to Staff' });
    }
  },
  async ProjetoValidator(req, res, next) {
    try {
      const schema = Yup.object().shape({
        nomeProjetos: Yup.string(255).required(),
        descricaoProjetos: Yup.string(255).required(),
        dataInicio: date().required(),
        dataFim: Yup.date().required(),
        cargaHoraria: Yup.number().required(),
        situacaoProjetos: Yup.bool().required(),
      });

      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (error) {
      return res.status(400).json({ message: 'Invalid data types to Projeto' });
    }
  },
  async HorarioValidator(req, res, next) {
    try {
      const schema = Yup.object().shape({
        horarioInicio: date().required(),
        horarioFim: Yup.date().required(),
      });

      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (error) {
      return res.status(400).json({ message: 'Invalid data types to Horario' });
    }
  },
  async EnderecoValidator(req, res, next) {
    try {
      const schema = Yup.object().shape({
        cepEndereco: Yup.string(20).required(),
        ruaEndereco: Yup.string(255).required(),
        bairroEndereco: Yup.string(45).required(),
        cidadeEndereco: Yup.string(45).required(),
        numeroEndereco: number().required(),
        complementoEndereco: Yup.string(45).required(),
      });

      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Invalid data types to Endereco' });
    }
  },
  async CursoValidator(req, res, next) {
    try {
      const schema = Yup.object().shape({
        nomeCurso: Yup.string(45).required(),
        duracaoCurso: Yup.number().required(),
        descricaoCurso: Yup.string(45).required(),
        situacaoCurso: Yup.bool().required(),
        codMec: Yup.string(45).required(),
      });

      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (error) {
      return res.status(400).json({ message: 'Invalid data types to Curso' });
    }
  },
  async AlunoValidator(req, res, next) {
    try {
      const schema = Yup.object().shape({
        raAluno: Yup.number().required(),
        nomeAluno: Yup.string(45).required(),
        idadeAluno: Yup.number().required(),
        dataNascAluno: Yup.date().required(),
        cpfAluno: Yup.string(20).required(),
        rgAluno: Yup.string(20).required(),
        situacaoAluno: Yup.bool().required(),
        celularAluno: Yup.string(20).required(),
        telefoneAluno: Yup.string(20).required(),
        emailAluno: Yup.string(45).required(),
        emailInstituAluno: Yup.string(45).required(),
      });

      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (error) {
      return res.status(400).json({ message: 'Invalid data types to Aluno' });
    }
  },
  async CertificadoValidator(req, res, next) {
    try {
      const schema = Yup.object().shape({
        nomeAlunoCert: Yup.number().required(),
        nomePalestrante: Yup.string().required(),
        dataPalestra: Yup.date().required(),
      });

      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Invalid data types to Certificado' });
    }
  },
  async InatividadeValidator(req, res, next) {
    try {
      const schema = Yup.object().shape({
        dataInincio: Yup.date().required(),
        dataFim: Yup.date().required(),
        motivo: Yup.string(255).required(),
      });

      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Invalid data types to Inatividade' });
    }
  },
  async ProfessorValidator(req, res, next) {
    try {
      const schema = Yup.object().shape({
        nomeProfessor: Yup.string(255).required(),
        idadeProfessor: Yup.number().required(),
        dataNascProfessor: Yup.date().required(),
        cpfProfessor: Yup.string(20).required(),
        rgProfessor: Yup.string(20).required(),
        celularProfessor: Yup.string(20).required(),
        telefoneProfessor: Yup.string(20).required(),
        emailProfessor: Yup.string(45).required(),
        emailInstituProfessor: Yup.string(45).required(),
      });

      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Invalid data types to Professor' });
    }
  },
  async UsuarioValidator(req, res, next) {
    try {
      const schema = Yup.object().shape({
        nomeUsuario: Yup.string(45).required(),
        senhaUsuario: Yup.string(255).required(),
        emailUsuario: Yup.string(45).required(),
      });

      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (error) {
      return res.status(400).json({ message: 'Invalid data types to Usuario' });
    }
  },
  async VinculoValidator(req, res, next) {
    try {
      const schema = Yup.object().shape({
        tipoVinculo: Yup.string(45).required(),
      });

      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (error) {
      return res.status(400).json({ message: 'Invalid data types to Usuario' });
    }
  },
};
