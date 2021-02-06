
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('professionsSkills', {
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
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('professionsSkills');
  },
};
