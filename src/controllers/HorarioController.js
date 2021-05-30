const Horario = require('../models/Horario');

module.exports = {
  async index(request, response) {
    const horario = await Horario.findAll();

    return response.json(horario);
  },
  async show(request, response) {
    const { horarioId } = request.params;

    const horario = await Horario.findByPk(horarioId);

    return response.json(horario);
  },
  async store(request, response) {
    const horario = await Horario.create(request.body);

    return response.json(horario);
  },
  async delete(request, response) {
    const { horarioId } = request.params;

    const horario = await Horario.findByPk(horarioId);

    await horario.destroy();

    return response.json(horario);
  },

  async update(request, response) {
    const { horarioId } = request.params;

    const horario = await Horario.findByPk(horarioId);

    horario.update(request.body);

    return response.json(horario);
  },
};
