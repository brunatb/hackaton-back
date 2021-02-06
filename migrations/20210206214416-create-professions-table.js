
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('professions', {
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
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('professions');
  },
};
