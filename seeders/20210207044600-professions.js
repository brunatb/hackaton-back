
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
        name: 'Cabeleireiro(a)',
        image: 'https://www.imagemhost.com.br/images/2021/02/07/Hairdresser-bro.png',
      },
      {
        name: 'Professor(a)',
        image: 'https://www.imagemhost.com.br/images/2021/02/07/3NI4ndd.png',
      },
      {
        name: 'Programador(a) - Ensino técnico/Cursos de curta duração)',
        image: 'https://www.imagemhost.com.br/images/2021/02/07/dev002-bro.png',
      },
      {
        name: 'Programador(a) - Estágio/Início do superior',
        image: 'https://www.imagemhost.com.br/images/2021/02/07/dev002-bro.png',
      },
      {
        name: 'Analista/Programador(a) - Formação superior',
        image: 'https://www.imagemhost.com.br/images/2021/02/07/dev002-bro.png',
      },
      {
        name: 'Engenheiro(a)/Analista/Programador(a)  (mestrado profissional e doutorado)',
        image: 'https://www.imagemhost.com.br/images/2021/02/07/dev002-bro.png',
      },
      {
        name: 'Primeiros dias no emprego',
        image: 'https://www.imagemhost.com.br/images/2021/02/07/primeirodia-bro.png',
      },
      {
        name: 'Primeira reunião com diretoria / alta gestão',
        image: 'https://www.imagemhost.com.br/images/2021/02/07/reuniao-bro.png',
      },
      {
        name: 'PoC e apresentações para cliente',
        image: 'https://www.imagemhost.com.br/images/2021/02/07/poc-bro.png',
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('professions', null, {});
  },
};
