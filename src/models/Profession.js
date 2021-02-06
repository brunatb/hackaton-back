const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

class Profession extends Sequelize.Model {}

Profession.init({
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
  image: {
    type: Sequelize.STRING(150),
    allowNull: false,
  },
},
{

  sequelize,
  timestamps: false,
  modelName: 'profession',

});

module.exports = Profession;
