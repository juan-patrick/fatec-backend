const EmpregoPublico = require('../models/EmpregoPublico');

module.exports = {
  async index(req, res) {
    const empregoPublico = await EmpregoPublico.findAll();

    return res.json(empregoPublico);
  },
  async show(req, res) {
    const { empregopublicoId } = req.params;

    const empregoPublico = await EmpregoPublico.findByPk(empregopublicoId);

    return res.json(empregoPublico);
  },
  async store(req, res) {
    const empregoPublico = await EmpregoPublico.create(req.body);

    return res.json(empregoPublico);
  },
  async delete(req, res) {
    const { empregopublicoId } = req.params;

    const empregoPublico = await EmpregoPublico.findByPk(empregopublicoId);

    await empregoPublico.destroy();

    return res.json(empregoPublico);
  },
  async update(req, res) {
    const { empregopublicoId } = req.params;

    const empregoPublico = await EmpregoPublico.findByPk(empregopublicoId);

    empregoPublico.update(req.body);

    return res.json(empregoPublico);
  },
};