const Endereco = require('../models/Endereco');

module.exports = {
  async index(request, response) {
    const endereco = await Endereco.findAll();

    return response.json(endereco);
  },
  async show(request, response) {
    const { enderecoId } = request.params;

    const endereco = await Endereco.findByPk(enderecoId);

    return response.json(endereco);
  },
  async store(request, response) {
    const endereco = await Endereco.create(request.body);

    return response.json(endereco);
  },
  async delete(request, response) {
    const { enderecoId } = request.params;

    const endereco = await Endereco.findByPk(enderecoId);

    await endereco.destroy();

    return response.json(endereco);
  },

  async update(request, response) {
    const { enderecoId } = request.params;

    const endereco = await Endereco.findByPk(enderecoId);

    endereco.update(request.body);

    return response.json(endereco);
  },
};
