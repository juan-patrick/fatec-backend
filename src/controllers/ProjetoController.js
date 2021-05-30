const Projeto = require('../models/Projeto');

module.exports = {
  async index(req, res) {
    const projeto = await Projeto.findAll();

    return res.json(projeto);
  },
  async show(req, res) {
    const { projetoId } = req.params;

    const projeto = await Projeto.findByPk(projetoId);

    return res.json(projeto);
  },
  async store(req, res) {
    const projeto = await Projeto.create(req.body);

    return res.json(projeto);
  },
  async delete(req, res) {
    const { projetoId } = req.params;

    const projeto = await Projeto.findByPk(projetoId);

    await projeto.destroy();

    return res.json(projeto);
  },
  async update(req, res) {
    const { projetoId } = req.params;

    const projeto = await Projeto.findByPk(projetoId);

    projeto.update(req.body);

    return res.json(projeto);
  },
};