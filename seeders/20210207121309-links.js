
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('links', [
      {
        link: 'https://www.primecursos.com.br/blog/a-importancia-da-flexibilidade-no-mundo-corporativo/',
        skillId: 1,
      },
      {
        link: 'https://www.mestregp.com.br/2020/04/20/flexibilidade-adaptabilidade-como-ser-agil-em-contextos-incertos-complexos/',
        skillId: 1,
      },
      {
        link: 'https://www.udemy.com/share/101U7k/',
        skillId: 2,
      },
      {
        link: 'https://www.udemy.com/course/beginners-guide-to-getting-organised/',
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
        link: 'https://www.alura.com.br/curso-online-comunicacao',
        skillId: 4,
      },
      {
        link: 'https://descola.org/empatia?gclid=Cj0KCQiAvP6ABhCjARIsAH37rbQ5b5cAtURssKt2zlBzif3Qo2PW6b_F5PTNuw_yp3VW02YvKuTQYOIaAg4REALw_wcB',
        skillId: 5,
      },
      {
        link: 'https://www.alura.com.br/curso-online-comunicacao-nao-violenta-mantendo-empatia',
        skillId: 5,
      },
      {
        link: 'https://www.udemy.com/course/conscious-listening/',
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
        link: 'https://www.alura.com.br/curso-online-aprender-a-aprender-tecnicas-para-seu-autodesenvolvimento',
        skillId: 10,
      },
      {
        link: 'https://www.alura.com.br/curso-online-criatividade-aplicada',
        skillId: 11,
      },
      {
        link: 'https://www.numerapeopleanalytics.com/pensamento-critico-curso-online-2',
        skillId: 12,
      },
      {
        link: 'https://centrodepesquisaeformacao.sescsp.org.br/atividade/introducao-ao-pensamento-critico-hoje',
        skillId: 12,
      },
      {
        link: 'https://www.alura.com.br/curso-online-comunicacao-assertiva-reduzindo-conflitos-e-frustracaoes',
        skillId: 13,
      },
      {
        link: 'https://www.udemy.com/course/gestao-do-tempo-e-produtividade-u/',
        skillId: 14,
      },
      {
        link: 'https://www.udemy.com/share/1032Pm/',
        skillId: 15,
      },
      {
        link: 'https://www.udemy.com/share/103MuJ/',
        skillId: 16,
      },
      {
        link: 'https://www.alura.com.br/curso-online-principios-trabalho-equipe-relacao-colaborativa?         gclid=Cj0KCQiAmfmABhCHARIsACwPRABQmfxHQRMIX7aFXLalJyJxdQRpG8JfCmrSiIBepyem5zcUqXcLTwwaAiP_EALw_wcB',
        skillId: 17,
      },
      {
        link: 'https://descola.org/resolucao-de-problemas-complexos?gclid=Cj0KCQiAvP6ABhCjARIsAH37rbTxnOyQp06Qnor8ytAFwAqf2y59pcw4XWwrk45bCkQ9Dtu_PmrFDfQaAhAnEALw_wcB',
        skillId: 18,
      },
      {
        link: 'https://www.ibccoaching.com.br/portal/coaching-carreira/dicas-trabalhar-sob-pressao/',
        skillId: 19,
      },
      {
        link: 'https://www.alura.com.br/curso-online-negociacao-praticas-essenciais',
        skillId: 20,
      },
      {
        link: 'https://www.learncafe.com/cursos/meu-primeiro-emprego',
        skillId: 21,
      },
      {
        link: 'https://www.startse.com/noticia/startups/prova-de-conceitopoc-com-startups',
        skillId: 22,
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('links', null, {});
  },
};
