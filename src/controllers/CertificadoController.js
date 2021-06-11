
const Certificado = require('../models/Certificado');

module.exports = {
    async index(req, res) {
        const certificado = await Certificado.findAll();
        return res.json(certificado)
    },
    async show(req, res) {
        const { certificadoId } = req.params;
        const certificado = await Certificado.findByPk(certificadoId);
        return res.json(certificado);
    },
    async store(req, res) {
        const certificado = await Certificado.create(req.body);
        return res.json(certificado);
    },
    async delete(req, res) {
        const { certificadoId } = req.params;
        const certificado = await Certificado.findByPk(certificadoId);
        await certificado.destroy();
        return res.json(certificado);
    },
    async update(req, res) {
        const { certificadoId } = req.params;
        const certificado = await Certificado.findByPk(certificadoId);
        certificado.update(req.body);
        return res.json(certificado);
    }
}