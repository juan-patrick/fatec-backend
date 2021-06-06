
const Horario = require('../models/Horario');

module.exports = {
    async index(req, res) {
        const horario = await Horario.findAll();
        return res.json(horario)
    },
    async show(req, res) {
        const { horarioId } = req.params;
        const horario = await Horario.findByPk(horarioId);
        return res.json(horario);
    },
    async store(req, res) {
        const horario = await Horario.create(req.body);
        return res.json(horario);
    },
    async delete(req, res) {
        const { horarioId } = req.params;
        const horario = await Horario.findByPk(horarioId);
        await horario.destroy();
        return res.json(horario);
    },
    async update(req, res) {
        const { horarioId } = req.params;
        const horario = await Horario.findByPk(horarioId);
        horario.update(req.body);
        return res.json(horario);
    }
}