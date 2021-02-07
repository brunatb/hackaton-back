const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

class Link extends Sequelize.Model {}

Link.init({
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
  modelName: 'link',
});

module.exports = Link;
