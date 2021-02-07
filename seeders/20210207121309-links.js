
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('links', [
      {
        link: 'https://www.primecursos.com.br/blog/a-importancia-da-flexibilidade-no-mundo-corporativo/',
        skillId: 1,
      },
      {
        link: 'https://www.udemy.com/share/101U7k/',
        skillId: 2,
      },
      {
        link: 'https://www.alura.com.br/curso-online-habitos-eficazes?gclid=Cj0KCQiAvP6ABhCjARIsAH37rbQ9PcYBrW7wSpSM4q9KrBZN8UnKQA8yghUc69R_6br9yoacQ8v-YVsaAh0fEALw_wcB',
        skillId: 3,
      },
      {
        link: 'https://online.escolaconquer.com.br/cursos-online/comunicacao-assertiva/?gclid=Cj0KCQiAvP6ABhCjARIsAH37rbRI0AA2sKSAM7Myk04UY5r_-2yhS-PJd7qGcQz40zU75UNYrWjFb3QaAj85EALw_wcB',
        skillId: 4,
      },
      {
        link: 'https://descola.org/empatia?gclid=Cj0KCQiAvP6ABhCjARIsAH37rbQ5b5cAtURssKt2zlBzif3Qo2PW6b_F5PTNuw_yp3VW02YvKuTQYOIaAg4REALw_wcB',
        skillId: 5,
      },
      {
        link: 'https://descola.org/empatia?gclid=Cj0KCQiAvP6ABhCjARIsAH37rbQ5b5cAtURssKt2zlBzif3Qo2PW6b_F5PTNuw_yp3VW02YvKuTQYOIaAg4REALw_wcB',
        skillId: 6,
      },
      {
        link: 'https://lobus.hospitalunimedvr.com.br/courses/o-pensamento-analitico-e-as-ferramentas-de-qualidade-ead',
        skillId: 7,
      },
      {
        link: 'https://www.alura.com.br/curso-online-resiliencia?gclid=Cj0KCQiAvP6ABhCjARIsAH37rbQgHdektZAWwGIdqAYrKOa_8-Y2jJYe7O9vCDPoujfcujc_jno5NdoaAubqEALw_wcB',
        skillId: 8,
      },
      {
        link: 'https://blog.grancursosonline.com.br/a-verdadeira-humildade/',
        skillId: 9,
      },
      {
        link: 'https://www.udemy.com/share/101G5c/',
        skillId: 10,
      },
      {
        link: 'https://www.numerapeopleanalytics.com/pensamento-critico-curso-online-2',
        skillId: 11,
      },
      {
        link: 'https://www.udemy.com/course/gestao-do-tempo-e-produtividade-u/',
        skillId: 12,
      },
      {
        link: 'https://www.udemy.com/share/1032Pm/',
        skillId: 13,
      },
      {
        link: 'https://www.udemy.com/share/103MuJ/',
        skillId: 14,
      },
      {
        link: 'https://www.alura.com.br/curso-online-principios-trabalho-equipe-relacao-colaborativa?         gclid=Cj0KCQiAmfmABhCHARIsACwPRABQmfxHQRMIX7aFXLalJyJxdQRpG8JfCmrSiIBepyem5zcUqXcLTwwaAiP_EALw_wcB',
        skillId: 15,
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('links', null, {});
  },
};
