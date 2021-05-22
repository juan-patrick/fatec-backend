const Inatividade = require('../models/Inatividade');

module.exports = {
  async index(request, response) {
    const inatividades = await Inatividade.findAll();

    return response.json(inatividades);
  },
  async show(request, response) {
    const { inatividadeId } = request.params;

    const inatividade = await Inatividade.findByPk(inatividadeId);

    return response.json(inatividade)
  },
  async store(request, response) {
    const inatividade = await Inatividade.create(request.body);

    return response.json(inatividade);
  },
  async delete(request, response) {
    const { inatividadeId } = request.params;

    const inatividade = await Inatividade.findByPk(inatividadeId);

    await inatividade.destroy();

    return response.json(inatividade);
  },

  async update(request, response) {
    const { inatividadeId } = request.params;

    const inatividade = await Inatividade.findByPk(inatividadeId);

    inatividade.update(request.body);

    return response.json(inatividade);
  }
};