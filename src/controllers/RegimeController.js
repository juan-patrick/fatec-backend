const Regime = require('../models/Regime');

module.exports = {
  async index(req, res) {
    const regime = await Regime.findAll();

    return res.json(regime);
  },
  async show(req, res) {
    const { regimeId } = req.params;

    const regime = await Regime.findByPk(regimeId);

    return res.json(regime);
  },
  async store(req, res) {
    const regime = await Regime.create(req.body);

    return res.json(regime);
  },
  async delete(req, res) {
    const { regimeId } = req.params;

    const regime = await Regime.findByPk(regimeId);

    await regime.destroy();

    return res.json(regime);
  },
  async update(req, res) {
    const { regimeId } = req.params;

    const regime = await Regime.findByPk(regimeId);

    regime.update(req.body);

    return res.json(regime);
  },
};