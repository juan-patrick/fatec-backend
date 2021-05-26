const TipoContrato = require('../models/TipoContrato');

module.exports = {
  async index(req, res) {
    const tipoContrato = await TipoContrato.findAll();

    return res.json(tipoContrato);
  },
  async show(req, res) {
    const { tipocontratoId } = req.params;

    const tipoContrato = await TipoContrato.findByPk(tipocontratoId);

    return res.json(tipoContrato);
  },
  async store(req, res) {
    const tipoContrato = await TipoContrato.create(req.body);

    return res.json(tipoContrato);
  },
  async delete(req, res) {
    const { tipocontratoId } = req.params;

    const tipoContrato = await TipoContrato.findByPk(tipocontratoId);

    await tipoContrato.destroy();

    return res.json(tipoContrato);
  },
  async update(req, res) {
    const { tipocontratoId } = req.params;

    const tipoContrato = await TipoContrato.findByPk(tipocontratoId);

    tipoContrato.update(req.body);

    return res.json(tipoContrato);
  },
};