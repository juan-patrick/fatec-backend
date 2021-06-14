const Matriz = require('../models/Matriz');

module.exports = {
  async index(_, response) {
    const matriz = await Matriz.findAll();

    return response.json(matriz);
  },
  async show(request, response) {
    const { matrizId } = request.params;

    const matriz = await Matriz.findByPk(matrizId);

    return response.json(matriz);
  },
  async store(request, response) {
    const matriz = await Matriz.create(request.body);

    return response.json(matriz);
  },
  async delete(request, response) {
    const { matrizId } = request.params;

    const matriz = await Matriz.findByPk(matrizId);

    await matriz.destroy();

    return response.json(matriz);
  },

  async update(request, response) {
    const { matrizId } = request.params;

    const matriz = await Matriz.findByPk(matrizId);

    matriz.update(request.body);

    return response.json(matriz);
  },
};
