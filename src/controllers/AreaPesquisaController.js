const AreaPesquisa = require('../models/AreaPesquisa');

module.exports = {
  async index(req, res) {
    const areaPesquisa = await AreaPesquisa.findAll();

    return res.status(200).json(areaPesquisa);
  },
  async show(req, res) {
    const { areaPesquisaId } = req.params;
    const areaPesquisa = await AreaPesquisa.findByPk(areaPesquisaId);

    return res.status(200).json(areaPesquisa);
  },
  async store(req, res) {
    const areaPesquisa = await AreaPesquisa.create(req.body);
    return res.status(200).json(areaPesquisa);
  },
  async delete(req, res) {
    const { areaPesquisaId } = req.params;

    const areaPesquisa = await AreaPesquisa.findByPk(areaPesquisaId);

    await areaPesquisa.destroy();

    return res.status(200).json(areaPesquisa);
  },
  async update(req, res) {
    const { areaPesquisaId } = req.params;

    const areaPesquisa = await AreaPesquisa.findByPk(areaPesquisaId);

    areaPesquisa.update(req.body);

    return res.status(200).json(areaPesquisa);
  },
};
