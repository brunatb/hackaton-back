
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('professionsSkills', [
      {
        professionId: 1,
        skillId: 17,
      },
      {
        professionId: 1,
        skillId: 2,
      },
      {
        professionId: 2,
        skillId: 20,
      },
      {
        professionId: 2,
        skillId: 19,
      },
      {
        professionId: 2,
        skillId: 6,
      },
      {
        professionId: 2,
        skillId: 5,
      },
      {
        professionId: 2,
        skillId: 4,
      },
      {
        professionId: 10,
        skillId: 22,
      },
      {
        professionId: 9,
        skillId: 21,
      },
      {
        professionId: 8,
        skillId: 12,
      },
      {
        professionId: 8,
        skillId: 20,
      },
      {
        professionId: 8,
        skillId: 19,
      },
      {
        professionId: 8,
        skillId: 18,
      },
      {
        professionId: 8,
        skillId: 8,
      },
      {
        professionId: 8,
        skillId: 16,
      },
      {
        professionId: 8,
        skillId: 15,
      },
      {
        professionId: 8,
        skillId: 14,
      },
      {
        professionId: 7,
        skillId: 20,
      },
      {
        professionId: 7,
        skillId: 19,
      },
      {
        professionId: 7,
        skillId: 18,
      },
      {
        professionId: 7,
        skillId: 8,
      },
      {
        professionId: 7,
        skillId: 16,
      },
      {
        professionId: 7,
        skillId: 15,
      },
      {
        professionId: 7,
        skillId: 14,
      },
      {
        professionId: 6,
        skillId: 8,
      },
      {
        professionId: 6,
        skillId: 16,
      },
      {
        professionId: 6,
        skillId: 15,
      },
      {
        professionId: 6,
        skillId: 14,
      },
      {
        professionId: 5,
        skillId: 16,
      },
      {
        professionId: 5,
        skillId: 15,
      },
      {
        professionId: 5,
        skillId: 14,
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('professionsSkills', null, {});
  },
};
