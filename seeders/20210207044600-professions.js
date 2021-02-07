
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('professions', [
      {
        name: 'Auxiliar Administrativo',
        image: 'https://www.imagemhost.com.br/images/2021/02/07/aux.png',
      },
      {
        name: 'Vendedor(a)',
        image: 'https://www.imagemhost.com.br/images/2021/02/07/lImGi9r.png',
      },
      {
        name: 'Programador(a)',
        image: 'https://www.imagemhost.com.br/images/2021/02/07/dev002-bro.png',
      },
      {
        name: 'Cabeleireiro(a)',
        image: 'https://www.imagemhost.com.br/images/2021/02/07/Hairdresser-bro.png',
      },
      {
        name: 'Professor(a)',
        image: 'https://www.imagemhost.com.br/images/2021/02/07/3NI4ndd.png',
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('professions', null, {});
  },
};
