
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('professionsSkills', [
      {
        professionId: 3,
        skillId: 12,
      },
      {
        professionId: 3,
        skillId: 13,
      },
      {
        professionId: 3,
        skillId: 14,
      },
      {
        professionId: 3,
        skillId: 15,
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('professionsSkills', null, {});
  },
};
