const Semana = require('../models/Semana');

module.exports = {
  async index(req, res) {
    const semana = await Semana.findAll();

    return res.status(200).json(semana);
  },
  async show(req, res) {
    const { semanaId } = req.params;
    const semana = await Semana.findByPk(semanaId);

    return res.status(200).json(semana);
  },
  async store(req, res) {
    const semana = await Semana.create(req.body);
    return res.status(200).json(semana);
  },
  async delete(req, res) {
    const { semanaId } = req.params;
    const semana = await Semana.findByPk(semanaId);
    
    await Semana.destroy({ where: { id: semanaId }});

    return res.status(200).json(semana);
  },
  async update(req, res) {
    const { semanaId } = req.params;

    const semana = await Semana.findByPk(semanaId);

    Semana.update(req.body, { where: { id: semanaId }});

    return res.status(200).json(semana);
  },
};
