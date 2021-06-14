
const Eventos = require('../models/Eventos');

module.exports = {
    async index(req, res) {
        const eventos = await Eventos.findAll();
        return res.json(eventos)
    },
    async show(req, res) {
        const { eventosId } = req.params;
        const eventos = await Eventos.findByPk(eventosId);
        return res.json(eventos);
    },
    async store(req, res) {
        const eventos = await Eventos.create(req.body);
        return res.json(eventos);
    },
    async delete(req, res) {
        const { eventosId } = req.params;
        const eventos = await Eventos.findByPk(eventosId);
        await eventos.destroy();
        return res.json(eventos);
    },
    async update(req, res) {
        const { eventosId } = req.params;
        const eventos = await Eventos.findByPk(eventosId);
        eventos.update(req.body);
        return res.json(eventos);
    }
}