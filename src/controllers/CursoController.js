const Curso = require('../models/Curso');

module.exports = {
  async index(req, res) {
    const cursos = await Curso.findAll();

    return res.status(200).json(cursos);
  },
  async show(req, res) {
    const { cursoId } = req.params;
    const curso = await Curso.findByPk(cursoId);

    return res.status(200).json(curso);
  },
  async store(req, res) {
    const curso = await Curso.create(req.body);
    return res.status(200).json(curso);
  },
  async delete(req, res) {
    const { cursoId } = req.params;

    const curso = await Curso.findByPk(cursoId);

    await curso.destroy();

    return res.status(200).json(curso);
  },
  async update(req, res) {
    const { cursoId } = req.params;

    const curso = await Curso.findByPk(cursoId);

    curso.update(req.body);

    return res.status(200).json(curso);
  },
};
