const Staff = require('../models/Staff');

module.exports = {
  async index(req, res) {
    const staff = await Staff.findAll();

    return res.json(staff);
  },
  async show(req, res) {
    const { staffId } = req.params;

    const staff = await Staff.findByPk(staffId);

    return res.json(staff);
  },
  async store(req, res) {
    const staff = await Staff.create(req.body);

    return res.json(staff);
  },
  async delete(req, res) {
    const { staffId } = req.params;

    const staff = await Staff.findByPk(staffId);

    await staff.destroy();

    return res.json(staff);
  },
  async update(req, res) {
    const { staffId } = req.params;

    const staff = await Staff.findByPk(staffId);

    staff.update(req.body);

    return res.json(staff);
  },
};