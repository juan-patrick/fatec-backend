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
  async CursoValidator(req, res, next) {
    try {
      const schema = Yup.object().shape({
        nome_curso: Yup.string().max(45).required(),
        duracao_curso: Yup.number().required(),
        descricao_curso: Yup.string().max(45).required(),
        situacao_curso: Yup.bool().required(),
      });

      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (error) {
      return res.status(400).json({ message: 'Invalid data types to Curso' });
    }
  },
  async ProjetoValidator(req, res, next) {
    try {
        const schema = Yup.object().shape({
            descricao_projetos: Yup.string().max(255).required(),
            data_ini: Yup.date().required(),
            data_fim: Yup.date().required(),
            carga_horaria: Yup.number().required(),
            status: Yup.bool().required(),
            nome_projetos: Yup.string().max(255).required(),
        });
        await schema.validate(req.body, { abortEarly: false });
        return next();
  
    } catch (error) {
        return res.status(400).json({ message: 'Invalid data types to Projetos' });
    }
  
  },
}

