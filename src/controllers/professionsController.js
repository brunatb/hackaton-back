const Profession = require('../models/Profession');

class ProfessionsController {
  async getAllProfessions() {
    return Profession.findAll();
  }
}

module.exports = new ProfessionsController();
