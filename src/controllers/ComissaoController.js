const Comissao = require('../models/Comissao');

module.exports = {
  async index(req, res) {
    const comissao = await Comissao.findAll();

    return res.status(200).json(comissao);
  },
  async show(req, res) {
    const { comissaoId } = req.params;
    const comissao = await Comissao.findByPk(comissaoId);

    return res.status(200).json(comissao);
  },
  async store(req, res) {
    const comissao = await Comissao.create(req.body);
    return res.status(200).json(comissao);
  },
  async delete(req, res) {
    const { comissaoId } = req.params;

    const comissao = await Comissao.findByPk(comissaoId);

    await comissao.destroy();

    return res.status(200).json(comissao);
  },
  async update(req, res) {
    const { comissaoId } = req.params;

    const comissao = await Comissao.findByPk(comissaoId);

    comissao.update(req.body);

    return res.status(200).json(comissao);
  },
};
