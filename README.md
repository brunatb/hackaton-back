# API ProviHackaton Women - Em construção

Esta API tem como funções principais listar profissões e relacioná-las com as softskills mais relevante para a profissão escolhida. Com isso espera-se dar um direcionamento para uma pessoa em início de carreira pontuando por onde ela pode começar a se preparar.

## Features
- Buscar lista de profissões
- Buscar uma profissão com suas softskills necessárias

## O que é a API?

A api tem as seguintes rotas: 

**GET /professions**

```json
[
    {
        "id": 1,
        "name": "Auxiliar Administrativo",
        "image": "https://www.imagemhost.com.br/images/2021/02/07/aux.png"
    },
    {
        "id": 2,
        "name": "Vendedor(a)",
        "image": "https://www.imagemhost.com.br/images/2021/02/07/lImGi9r.png"
    },
    {
        "id": 3,
        "name": "Cabeleireiro(a)",
        "image": "https://www.imagemhost.com.br/images/2021/02/07/Hairdresser-bro.png"
    },
    {
        "id": 4,
        "name": "Professor(a)",
        "image": "https://www.imagemhost.com.br/images/2021/02/07/3NI4ndd.png"
    },
    {
        "id": 5,
        "name": "Programador(a) - Ensino técnico/Cursos de curta duração)",
        "image": "https://www.imagemhost.com.br/images/2021/02/07/dev002-bro.png"
    },
    {
        "id": 6,
        "name": "Programador(a) - Estágio/Início do superior",
        "image": "https://www.imagemhost.com.br/images/2021/02/07/dev002-bro.png"
    },
    {
        "id": 7,
        "name": "Analista/Programador(a) - Formação superior",
        "image": "https://www.imagemhost.com.br/images/2021/02/07/dev002-bro.png"
    },
    {
        "id": 8,
        "name": "Engenheiro(a)/Analista/Programador(a)  (mestrado profissional e doutorado)",
        "image": "https://www.imagemhost.com.br/images/2021/02/07/dev002-bro.png"
    },
    {
        "id": 9,
        "name": "Primeiros dias no emprego",
        "image": "https://www.imagemhost.com.br/images/2021/02/07/primeirodia-bro.png"
    },
    {
        "id": 10,
        "name": "Primeira reunião com diretoria / alta gestão",
        "image": "https://www.imagemhost.com.br/images/2021/02/07/reuniao-bro.png"
    },
    {
        "id": 11,
        "name": "PoC e apresentações para cliente",
        "image": "https://www.imagemhost.com.br/images/2021/02/07/poc-bro.png"
    }
]
```

**GET /professions/:id**
```json
{
    "id": 3,
    "name": "Programador(a)",
    "image": "https://www.imagemhost.com.br/images/2021/02/07/dev002-bro.png",
    "skills": [
        {
            "id": 12,
            "name": "Gestão de tempo",
            "description": "A gestão do tempo é o processo de planejamento da execução das atividades diárias, visando à melhoria da eficiência e da produtividade. Em outras palavras, trata-se de um levantamento das atividades que devem ser realizadas e organizá-las por prioridade e pelo tempo necessário para a realização das atividades.",
            "image": "https://www.imagemhost.com.br/images/2021/02/07/Time-management-bro.png",
            "links": [
                {
                    "id": 12,
                    "link": "https://www.udemy.com/course/gestao-do-tempo-e-produtividade-u/",
                    "skillId": 12
                }
            ]
        },
        {
            "id": 13,
            "name": "Adaptabilidade",
            "description": "Adaptabilidade é a capacidade do indivíduo de se adaptar de acordo com as necessidades, situações e circunstâncias.",
            "image": "https://www.imagemhost.com.br/images/2021/02/07/Jb394Zr.png",
            "links": [
                {
                    "id": 13,
                    "link": "https://www.udemy.com/share/1032Pm/",
                    "skillId": 13
                }
            ]
        },
        {
            "id": 14,
            "name": "Autodidatismo",
            "description": "O autodidatismo se refere ao desenvolvimento e processo intelectual independente, ou seja, a pessoa tem a capacidade de aprender algo sem a necessidade de um professor ou instrutor. Os indivíduos adquirem conhecimento de forma autônoma sobre tópicos específicos por meio de hábitos ativos, trabalho árduo e muita pesquisa e prática.",
            "image": "https://www.imagemhost.com.br/images/2021/02/07/YA8W69l.png",
            "links": [
                {
                    "id": 14,
                    "link": "https://www.udemy.com/share/103MuJ/",
                    "skillId": 14
                }
            ]
        },
        {
            "id": 15,
            "name": "Trabalho em equipe",
            "description": "O trabalho em equipe é quando pessoas com diferentes vivências, visões e opiniões se unem para resolver um problema em comum.",
            "image": "https://www.imagemhost.com.br/images/2021/02/07/qt1UYRr.png",
            "links": [
                {
                    "id": 15,
                    "link": "https://www.alura.com.br/curso-online-principios-trabalho-equipe-relacao-colaborativa?         gclid=Cj0KCQiAmfmABhCHARIsACwPRABQmfxHQRMIX7aFXLalJyJxdQRpG8JfCmrSiIBepyem5zcUqXcLTwwaAiP_EALw_wcB",
                    "skillId": 15
                }
            ]
        }
    ]
}

```

## Como rodar o projeto?
1. Instale o NodeJS [https://nodejs.org/en/](https://nodejs.org/en/)
2. Clone o projeto
3. Crie o arquivo .env a partir do arquivo .env.example e preencha o valor da porta a ser usada.
4. Instale as dependências
```bash
    npm i
```
5.Rode as migrations
```bash
    npm run build
```
6.Rode as seeds
```bash
    npm run seeds
```
8. Rode a aplicação
```bash
    npm run dev
```
