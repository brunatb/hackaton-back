
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('skills', [
      {
        name: 'Flexibilidade',
        description: 'A flexibilidade é uma habilidade importante porque mostra a capacidade e vontade de adquirir novas habilidades e uma atitude aberta a novos desafios.',
      },
      {
        name: 'Organização',
        description: 'A base para melhorar a eficiência e a qualidade do trabalho. Tornar-se um profissional organizado pode economizar tempo porque você pode encontrar informações mais rapidamente.',
      },
      {
        name: 'Proatividade',
        description: 'O comportamento proativo está relacionado a evitar ou resolver possíveis problemas antes que eles aconteçam. Por exemplo, ao planejar e executar ideias e tarefas, pessoas proativas podem evitar situações negativas ou prejudiciais para a empresa.',
      },
      {
        name: 'Comunicação',
        description: 'Uma boa comunicação pode evitar erros e mal-entendidos, ajudando assim a manter o ambiente de trabalho tranquilo. Lembre-se de que a comunicação envolve não apenas saber como e quando se expressar, mas também saber ouvir. Uma boa comunicação ajuda a estabelecer e manter bons relacionamentos.',
      },
      {
        name: 'Empatia',
        description: 'Empatia se refere à capacidade e exercício psicológico de sentir o que sentiria outra pessoa, caso estivesse na mesma situação vivenciada por ela.',
      },
      {
        name: 'Escuta Ativa',
        description: 'A escuta ativa é uma forma de melhorar a eficiência do diálogo. Com base em ouvir e compreender com toda dedicação o que a outra pessoa está dizendo, a escuta ativa permite que os ouvintes realmente absorvam o conteúdo da fala do interlocutor.',
      },
      {
        name: 'Pensamento analítico',
        description: 'O pensamento analítico é uma forma de pensamento cujo propósito é explicar as coisas dividindo-as em partes mais simples.',
      },
      {
        name: 'Resiliência',
        description: 'Pessoas com resiliência têm a capacidade de enfrentar, aprender, crescer e amadurecer com as adversidades, dificuldades e conflitos que muitas vezes se encontram na vida, e usar recursos internos pessoais para lidar com essas situações de uma nova forma.',
      },
      {
        name: 'Humildade',
        description: 'A humildade é a virtude de compreender as próprias limitações e fraquezas e agir de acordo com essa consciência. Refere-se às qualidades de pessoas que não procuram se projetar nos outros, nem se mostram superiores aos demais.',
      },
      {
        name: 'Criatividade',
        description: 'É a capacidade de criar e inventar. Também mostra a qualidade daqueles que têm percepções originais ou se mostra capaz de propor novas narrativas.',
      },
      {
        name: 'Pensamento crítico',
        description: 'O pensamento crítico significa analisar situações de diferentes perspectivas e usar diferentes argumentos para tomar decisões consistentes. Abrange a capacidade de agir diante dos problemas de forma imparcial e crítica.',
      },
      {
        name: 'Gestão de tempo',
        description: 'A gestão do tempo é o processo de planejamento da execução das atividades diárias, visando à melhoria da eficiência e da produtividade. Em outras palavras, trata-se de um levantamento das atividades que devem ser realizadas e organizá-las por prioridade e pelo tempo necessário para a realização das atividades.',
      },
      {
        name: 'Adaptabilidade',
        description: 'Adaptabilidade é a capacidade do indivíduo de se adaptar de acordo com as necessidades, situações e circunstâncias.',
      },
      {
        name: 'Autodidatismo',
        description: 'O autodidatismo se refere ao desenvolvimento e processo intelectual independente, ou seja, a pessoa tem a capacidade de aprender algo sem a necessidade de um professor ou instrutor. Os indivíduos adquirem conhecimento de forma autônoma sobre tópicos específicos por meio de hábitos ativos, trabalho árduo e muita pesquisa e prática.',
      },
      {
        name: 'Trabalho em equipe',
        description: 'O trabalho em equipe é quando pessoas com diferentes vivências, visões e opiniões se unem para resolver um problema em comum.',
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('skills', null, {});
  },
};
