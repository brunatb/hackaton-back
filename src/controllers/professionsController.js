const NotFoundError = require('../errors/NotFoundError');
const Link = require('../models/Link');
const Profession = require('../models/Profession');
const Skill = require('../models/Skill');

class ProfessionsController {
  async getAllProfessions() {
    return Profession.findAll();
  }

  async getProfessionById(id) {
    const profession = await Profession.findByPk(id, {
      include: [
        {
          model: Skill,
          through: {
            attributes: [],
          },
          include: [
            {
              model: Link,
            },
          ],
        },
      ],
    });

    if (!profession) throw new NotFoundError();
    return profession;
  }

  async createProfession(name, image) {
    return Profession.create({ name, image });
  }
}

module.exports = new ProfessionsController();
