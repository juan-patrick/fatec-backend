
const Area = require('../models/Area');

module.exports = {
    async index(req, res) {
        const area = await Area.findAll();
        return res.json(area)
    },
    async show(req, res) {
        const { areaId } = req.params;
        const area = await Area.findByPk(areaId);
        return res.json(area);
    },
    async store(req, res) {
        const area = await Area.create(req.body);
        return res.json(area);
    },
    async delete(req, res) {
        const { areaId } = req.params;
        const area = await Area.findByPk(areaId);
        await area.destroy();
        return res.json(area);
    },
    async update(req, res) {
        const { areaId } = req.params;
        const area = await Area.findByPk(areaId);
        area.update(req.body);
        return res.json(area);
    }
}