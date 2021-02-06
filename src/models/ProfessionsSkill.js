const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

class ProfessionsSkill extends Sequelize.Model {}

ProfessionsSkill.init({
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  professionId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'professions',
      key: 'id',
    },
  },
  skillId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'skills',
      key: 'id',
    },
  },
},
{

  sequelize,
  timestamps: false,
  modelName: 'profession',

});

module.exports = ProfessionsSkill;
