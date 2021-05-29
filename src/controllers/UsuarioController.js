const Usuario = require('../models/Usuario');

module.exports = {
  async index(req, res) {
    const usuario = await Usuario.findAll();

    return res.json(usuario);
  },
  async show(req, res) {
    const { usuarioId } = req.params;

    const usuario = await Usuario.findByPk(usuarioId);

    return res.json(usuario);
  },
  async store(req, res) {
    const usuario = await Usuario.create(req.body);

    return res.json(usuario);
  },
  async delete(req, res) {
    const { usuarioId } = req.params;

    const usuario = await Usuario.findByPk(usuarioId);

    await usuario.destroy();

    return res.json(usuario);
  },
  async update(req, res) {
    const { usuarioId } = req.params;

    const usuario = await Usuario.findByPk(usuarioId);

    usuario.update(req.body);

    return res.json(usuario);
  },
};