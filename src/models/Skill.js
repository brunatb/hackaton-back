const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

class Skill extends Sequelize.Model {}

Skill.init({
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING(150),
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING(150),
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING(10000),
    allowNull: true,
  },
},
{

  sequelize,
  timestamps: false,
  modelName: 'skill',

});

module.exports = Skill;
