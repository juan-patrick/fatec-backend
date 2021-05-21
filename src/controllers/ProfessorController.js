const Professor = require('../models/Professor');

module.exports = {
    async index(request,response){
        const professors = await Professor.findAll();

        return response.json(professors);
    },
    async show (request,response){
        const {professorId} = request.params;

        const professor = await Professor.findByPk(professorId);

        return response.json(professor)
    },
    async store (request,response){
        const professor = await Professor.create(request.body);

        return response.json(professor);
    },
    async delete (request,response){
        const {professorId} = request.params;

        const professor = await Professor.findByPk(professorId);

        await professor.destroy();
        
        return response.json(professor);
    },
    async update (request,response){
        const {professorId} = request.params;

        const professor = await Professor.findByPk(professorId);

        professor.update(request.body);

        return response.json(professor);
    }
};