const Profession = require('../models/Profession');
const ProfessionsSkill = require('../models/ProfessionsSkill');
const Skill = require('../models/Skill');

Profession.belongsToMany(Skill, { through: ProfessionsSkill });
Skill.belongsToMany(Profession, { through: ProfessionsSkill });

