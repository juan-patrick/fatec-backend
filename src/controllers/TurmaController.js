const Turma = require('../models/Turma');

module.exports = {
  async index(req, res) {
    const turma = await Turma.findAll();

    return res.json(turma);
  },
  async show(req, res) {
    const { turmaId } = req.params;

    const turma = await Turma.findByPk(turmaId);

    return res.json(turma);
  },
  async store(req, res) {
    const turma = await Turma.create(req.body);

    return res.json(turma);
  },
  async delete(req, res) {
    const { turmaId } = req.params;

    const turma = await Turma.findByPk(turmaId);

    await turma.destroy();

    return res.json(turma);
  },
  async update(req, res) {
    const { turmaId } = req.params;

    const turma = await Turma.findByPk(turmaId);

    turma.update(req.body);

    return res.json(turma);
  },
};