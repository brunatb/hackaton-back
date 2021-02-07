const Link = require('../models/Link');
const Skill = require('../models/Skill');

class SkillsController {
  async createSkill(name, description) {
    return Skill.create({ name, description });
  }

  async createLinks(links) {
    return Link.bulkCreate(links);
  }

  async getAllSkills() {
    return Skill.findAll({ include: Link });
  }
}

module.exports = new SkillsController();
