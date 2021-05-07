const CursoExtensao = require('../models/CursoExtensao');

module.exports = {
  async index(req, res) {
    const cursos = await CursoExtensao.findAll();

    return res.json(cursos);
  },
  async show(req, res) {
    const { cursoExtensaoId } = req.params;

    const cursoExtensao = await CursoExtensao.findByPk(cursoExtensaoId);

    return res.json(cursoExtensao);
  },
  async store(req, res) {
    const cursoExtensao = await CursoExtensao.create(req.body);

    return res.json(cursoExtensao);
  },
  async delete(req, res) {
    const { cursoExtensaoId } = req.params;

    const cursoExtensao = await CursoExtensao.findByPk(cursoExtensaoId);

    await cursoExtensao.destroy();

    return res.json(cursoExtensao);
  },
  async update(req, res) {
    const { cursoExtensaoId } = req.params;

    const cursoExtensao = await CursoExtensao.update({ id: cursoExtensaoId }, req.body);

    return res.json(cursoExtensao);
  }
};