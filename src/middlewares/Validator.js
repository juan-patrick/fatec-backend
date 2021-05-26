const Yup = require('yup');

module.exports = {
  async CursoExtensaoValidator(req, res, next) {
    try {
      const schema = Yup.object().shape({
        nome_extensao: Yup.string().max(45).required(),
        tipo_extensao: Yup.string().max(45).required(),
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
        nome_disciplina: Yup.string().required(),
        descricao_disciplina: Yup.string().required(),
        carga_horaria: Yup.string().required(),
        objetivo_disciplina: Yup.string().required(),
        ementa_disciplina: Yup.string().required(),
        refenciaBasica_disciplina: Yup.string().required(),
        refenciaComplementar_disciplina: Yup.string().required(),
        codSiga_disciplina: Yup.string().required(),
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
        cargo_publico: Yup.string(50).required(),
        situacao: Yup.bool(),
      });

      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Invalid data types to Emprego Publico'});
    }
  },
  async TitulacaoValidator(req, res, next) {
    try {
      const schema = Yup.object().shape({
        nome_titulacao: Yup.string(45).required(),
      });

      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Invalid data types to Titulacao'});
    }
  },
  async TipoContratoValidator(req, res, next) {
    try {
      const schema = Yup.object().shape({
        tipo_contrato: Yup.string(45).required(),
      });

      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Invalid data types to Tipo de Contrato'});
    }
  },
  async RegimeValidator(req, res, next) {
    try {
      const schema = Yup.object().shape({
        tipo_regime: Yup.string(45).required(),
      });

      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Invalid data types to Tipo de Regime'});
    }
  },
};
