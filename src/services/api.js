export function loadLists() {
  return [
    {
      title: 'Tarefas',
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Estudar NodeJS',
          labels: ['#ddef34'],
          user: 'https://api.adorable.io/avatars/285/kichina.png'
        },
        {
          id: 2,
          content: 'Recriar a interface do Pipefy',
          labels: ['#ddef34', '#715'],
          user: 'https://api.adorable.io/avatars/285/ntomo.png'
        },
        {
          id: 5,
          content: 'Estudar testes e deploy ReactJS',
          labels: ['#54e1f7', '#7159c1', '#715'],
          user: 'https://api.adorable.io/avatars/285/tomo.png'
        },        
        {
          id: 3,
          content: 'Estudar React Native',
          labels: ['#7159c1', '#715'],
          user: 'https://api.adorable.io/avatars/285/ztorrezao.png'
        },
      ]
    },
    {
      title: 'Fazendo',
      creatable: false,
      cards: [
        {
          id: 4,
          content: 'Estudar "NextJS: Utilizando server-side rendering com ReactJS"',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/285/luv.png'
        },
        {
          id: 6,
          content: 'Recriando clone do Pipefy',
          labels: [],
          user: 'https://api.adorable.io/avatars/285/kazaca.png'
        }
      ]
    },
    {
      title: 'Pausado',
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Ler sobre Geolocalização e mapas com React Native',
          labels: ['#7159c1'],
          user: 'https://api.adorable.io/avatars/285/zani.png'
        },
        {
          id: 8,
          content: 'Gravar testes e deploy ReactJS',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/285/z.torrezao@zamera.co.mz.png'
        },
        {
          id: 9,
          content: 'Dev traking app in React Native',
          labels: [],
        }
      ]
    },
    {
      title: 'Concluído',
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Assistir aula sobre deploy e CI com React Native',
          labels: [],
        },
        {
          id: 12,
          content: 'Assistir testes e deploy ReactJS',
          labels: ['#54e1f7', '#715'],
        },
        {
          id: 13,
          content: 'Assistir Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
          labels: ['#7159c1'],
        }
      ]
    },
  ];
}