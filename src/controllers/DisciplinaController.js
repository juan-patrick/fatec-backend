const Disciplina = require('../models/Disciplina');

module.exports = {
  async index(req, res) {
    const disciplina = await Disciplina.findAll();

    return res.json(disciplina);
  },
  async show(req, res) {
    const { disciplinaId } = req.params;

    const disciplina = await Disciplina.findByPk(disciplinaId);

    return res.json(disciplina);
  },
  async store(req, res) {
    const disciplina = await Disciplina.create(req.body);

    return res.json(disciplina);
  },
  async delete(req, res) {
    const { disciplinaId } = req.params;

    const disciplina = await Disciplina.findByPk(disciplinaId);

    await disciplina.destroy();

    return res.json(disciplina);
  },
  async update(req, res) {
    const { disciplinaId } = req.params;

    const disciplina = await Disciplina.findByPk(disciplinaId);

    disciplina.update(req.body);

    return res.json(disciplina);
  },
};
