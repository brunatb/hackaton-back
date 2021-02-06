const Profession = require('../models/Profession');

class ProfessionsController {
  async getAllProfessions() {
    return Profession.findAll();
  }

  async createProfession(name, image) {
    return Profession.create({ name, image });
  }
}

module.exports = new ProfessionsController();
