
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('professions', [
      {
        name: 'Auxiliar Administrativo',
        image: 'https://www.ensinonarede.com.br/img_menus_sub_itens/1904/destaque.jpg',
      },
      {
        name: 'Vendedor(a)',
        image: 'https://conversetelecom.com.br/wp-content/uploads/2019/03/original-6290b9b54c5954fd698fdb9a4c01a21c.jpg',
      },
      {
        name: 'Programador(a)',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrh3CTsRdT_0sOYMeChC5Db-YSusl4538MxA&usqp=CAU',
      },
      {
        name: 'Cabeleireiro(a)',
        image: 'https://www.sp.senac.br/documents/20125/45323/12822_01-01-2016.jpg/32c8e636-68d0-e50d-c3fe-f9ef921f6ee7?version=1.0&t=1596479773623null&download=true',
      },
      {
        name: 'Professor(a)',
        image: 'https://www.neipies.com/wp-content/uploads/2017/10/professor.jpg',
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('professions', null, {});
  },
};
