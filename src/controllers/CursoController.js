const Curso = require('../models/Curso');

module.exports = {
  async index(req, res) {
    const curso = await Curso.findAll();

    return res.json(curso);
  },
  async show(req, res) {
    const { cursoId } = req.params;

    const curso = await Curso.findByPk(cursoId);

    return res.json(curso);
  },
  async store(req, res) {
    const curso = await Curso.create(req.body);

    return res.json(curso);
  },
  async delete(req, res) {
    const { cursoId } = req.params;

    const curso = await Curso.findByPk(cursoId);

    await curso.destroy();

    return res.json(curso);
  },
  async update(req, res) {
    const { cursoId } = req.params;

    const curso = await Curso.findByPk(cursoId);

    curso.update(req.body);

    return res.json(curso);
  },
};
