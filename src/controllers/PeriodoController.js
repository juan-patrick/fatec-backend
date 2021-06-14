const Periodo = require('../models/Periodo');

module.exports = {
  async index(req, res) {
    const periodo = await Periodo.findAll();

    return res.status(200).json(periodo);
  },
  async show(req, res) {
    const { periodoId } = req.params;
    const periodo = await Periodo.findByPk(periodoId);

    return res.status(200).json(periodo);
  },
  async store(req, res) {
    const periodo = await Periodo.create(req.body);
    return res.status(200).json(periodo);
  },
  async delete(req, res) {
    const { periodoId } = req.params;

    const periodo = await Periodo.findByPk(periodoId);

    await Periodo.destroy({ where: { id: periodoId }});

    return res.status(200).json(periodo);
  },
  async update(req, res) {
    const { periodoId } = req.params;

    const periodo = await Periodo.findByPk(periodoId);

    Periodo.update(req.body, { where: { id: periodoId }});

    return res.status(200).json(periodo);
  },
};
