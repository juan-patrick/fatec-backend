const RegistroSubstituicao = require('../models/RegistroSubstituicao');

module.exports = {
  async index(req, res) {
    const registroSubstituicao = await RegistroSubstituicao.findAll();

    return res.json(registroSubstituicao);
  },
  async show(req, res) {
    const { registroSubstituicaoId } = req.params;

    const registroSubstituicao = await RegistroSubstituicao.findByPk(registroSubstituicaoId);

    return res.json(registroSubstituicao);
  },
  async store(req, res) {
    const registroSubstituicao = await RegistroSubstituicao.create(req.body);

    return res.json(registroSubstituicao);
  },
  async delete(req, res) {
    const { registroSubstituicaoId } = req.params;

    const registroSubstituicao = await RegistroSubstituicao.findByPk(registroSubstituicaoId);

    await registroSubstituicao.destroy();

    return res.json(registroSubstituicao);
  },
  async update(req, res) {
    const { registroSubstituicaoId } = req.params;

    const registroSubstituicao = await RegistroSubstituicao.findByPk(registroSubstituicaoId);

    registroSubstituicao.update(req.body);

    return res.json(registroSubstituicao);
  },
};