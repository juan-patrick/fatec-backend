const Titulacao = require('../models/Titulacao');

module.exports = {
  async index(req, res) {
    const titulacao = await Titulacao.findAll();

    return res.json(titulacao);
  },
  async show(req, res) {
    const { titulacaoId } = req.params;

    const titulacao = await Titulacao.findByPk(titulacaoId);

    return res.json(titulacao);
  },
  async store(req, res) {
    const titulacao = await Titulacao.create(req.body);

    return res.json(titulacao);
  },
  async delete(req, res) {
    const { titulacaoId } = req.params;

    const titulacao = await Titulacao.findByPk(titulacaoId);

    await titulacao.destroy();

    return res.json(titulacao);
  },
  async update(req, res) {
    const { titulacaoId } = req.params;

    const titulacao = await Titulacao.findByPk(titulacaoId);

    titulacao.update(req.body);

    return res.json(titulacao);
  },
};