const Vinculo = require('../models/Vinculo');

module.exports = {
  async index(request, response) {
    const vinculos = await Vinculo.findAll();

    return response.json(vinculos);
  },
  async show(request, response) {
    const { vinculoId } = request.params;

    const vinculo = await Vinculo.findByPk(vinculoId);

    return response.json(vinculo)
  },
  async store(request, response) {
    const vinculo = await Vinculo.create(request.body);

    return response.json(vinculo);
  },
  async delete(request, response) {
    const { vinculoId } = request.params;

    const vinculo = await Vinculo.findByPk(vinculoId);

    await vinculo.destroy();

    return response.json(vinculo);
  },

  async update(request, response) {
    const { vinculoId } = request.params;

    const vinculo = await Vinculo.findByPk(vinculoId);

    vinculo.update(request.body);

    return response.json(vinculo);
  }
};

