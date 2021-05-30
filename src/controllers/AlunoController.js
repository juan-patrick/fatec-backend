const Aluno = require('../models/Aluno');

module.exports = {
  async index(req, res) {
    const aluno = await Aluno.findAll();

    return res.status(200).json(aluno);
  },
  async show(req, res) {
    const { alunoId } = req.params;
    const aluno = await Aluno.findByPk(alunoId);

    return res.status(200).json(aluno);
  },
  async store(req, res) {
    const aluno = await Aluno.create(req.body);
    return res.status(200).json(aluno);
  },
  async delete(req, res) {
    const { alunoId } = req.params;

    const aluno = await Aluno.findByPk(alunoId);

    await aluno.destroy();

    return res.status(200).json(aluno);
  },
  async update(req, res) {
    const { alunoId } = req.params;

    const aluno = await Aluno.findByPk(alunoId);

    aluno.update(req.body);

    return res.status(200).json(aluno);
  },
};
