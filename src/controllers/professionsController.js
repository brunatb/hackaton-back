const NotFoundError = require('../errors/NotFoundError');
const Link = require('../models/Link');
const Profession = require('../models/Profession');
const ProfessionsSkill = require('../models/ProfessionsSkill');
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

  async createProfessionsSkills(professionId, skillId) {
    return ProfessionsSkill.create({ professionId, skillId });
  }
}

module.exports = new ProfessionsController();
