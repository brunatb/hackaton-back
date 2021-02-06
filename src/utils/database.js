const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite',
  storage: './database.sqlite3',
});

module.exports = sequelize;
