const songsDataTest = [
  {
    name: "¿Dónde jugarán los niños?",
    band: "Maná",
    releaseYear: "1992",
    statistics: {
      likes: 20000,
      reproductions: 8000,
    },
  },
  {
    name: "La muralla verde",
    band: "Enanitos Verdes",
    releaseYear: "1986",
    statistics: {
      likes: 21000,
      reproductions: 19000,
    },
  },
  {
    name: "Te Ví En Un Tren",
    band: "Enanitos Verdes",
    releaseYear: "1987",
    statistics: {
      likes: 20000,
      reproductions: 23490,
    },
  },
  {
    name: "Mariposa Traicionera",
    band: "Maná",
    releaseYear: "2002",
    statistics: {
      likes: 12000,
      reproductions: 25690,
    },
  },
  {
    name: "Rayando el Sol",
    band: "Maná",
    releaseYear: "1990",
    statistics: {
      likes: 12000,
      reproductions: 18000,
    },
  },
  {
    name: "La celula que explota",
    band: "Jaguares",
    releaseYear: "1999",
    statistics: {
      likes: 12000,
      reproductions: 23421,
    },
  },
  {
    name: "No dejes que...",
    band: "Jaguares",
    releaseYear: "1999",
    statistics: {
      likes: 12345,
      reproductions: 10000,
    },
  },
];
const songs2 = [
  {
    name: "asdasdasdasda",
    band: "asdasdsa",
    releaseYear: "1992",
    statistics: {
      likes: 20000,
      reproductions: 8000,
    },
  },
];
// vamos a generar un protipo tipo cancion
// Tomando en cuenta el arreglo de songsData vamos a generar un arreglo con una instancia por cada cancion

// generar un arreglo nuevo
// generar un ciclo for para iterar songsData
// generar una instancia de tipo Song
// agregarla al arreglo nuevo
// retorno el arreglo lleno

// Prototypos

function Song(data) {
  this.name = data.name;
  this.band = data.band;
  this.releaseYear = data.releaseYear;
  this.statistics = data.statistics;
}

function factorySong(arraySong) {
  const songList = [];
  for (const iterator of arraySong) {
    const instancia = new Song(iterator);
    songList.push(instancia);
  }
  return songList;
}
const resultado = factorySong(songsDataTest);

//   const song1 = new Song('cancion', 'Yonics', '1990');
//   const song1 = new Song('cancion', 'Yonics', '1990');
//   const song1 = new Song('cancion', 'Yonics', '1990');
//   const song1 = new Song('cancion', 'Yonics', '1990');
//   const song1 = new Song('cancion', 'Yonics', '1990');

// Crear un arreglo con instancias de tipo Personaje

// vamos a crear dos arreglos donde uno tenga instancias de personajes tipo Male y otro arregoo donde tenga instancias de tipo Female
// output : {
//     male: [Male],
//     female: [Female]
// }

const numeros = [1, 2, 3, 4, 5, 6, 7];

const multiplicado = numeros.forEach((item, index) => {
  // console.log(item);
  return item * 2;
});
// console.log(multiplicado)

// const test = () => {
//     return 2
// }

let songsData = [
  {
    name: "Kashmir",
    band: "Led Zeppelin",
    releaseYear: "1980",
    statistics: {
      likes: 20000,
      reproductions: 8000,
    },
  },
  {
    name: "Smells Like Teen Spirit",
    band: "Nirvana",
    releaseYear: "1989",
    statistics: {
      likes: 25000,
      reproductions: 100000,
    },
  },
  {
    name: "So What",
    band: "Metallica",
    releaseYear: "1990",
    statistics: {
      likes: 12000,
      reproductions: 95000,
    },
  },
  {
    name: "Nothing Else Matters",
    band: "Metallica",
    releaseYear: "1992",
    statistics: {
      likes: 128000,
      reproductions: 915000,
    },
  },
  {
    name: "Daze",
    band: "Poets_of_the_Fall",
    releaseYear: "2014",
    statistics: {
      likes: 3548413,
      reproductions: 87095138,
    },
  },
  {
    name: "The Sweet Scape",
    band: "Poets_of_the_fall",
    releaseYear: "2018",
    statistics: {
      likes: 26268856,
      reproductions: 2424568,
    },
  },
];

//   Ejercicios
// Tomando en cuenta la siguiente estructura de datos :

// - Crear un nuevo arreglo donde guardemos un string con el nombre de la cancion y la banda ejemplo:
//   output:
//   [
//    'La cancion Kashmir es de Led Zeppelin',
//    'La cancion Smells Like Teen Spirit es de Nirvana'
//   ]
// - Mostrar la cancion mas antigua de la lista
//   output:
//    {
//       name: "Kashmir",
//       band: "Led Zeppelin",
//       releaseYear: "1980",
//       statistics: {
//         likes: 20000,
//         reproductions: 8000,
//       }
//     },

// crear la funcion
// ejecutamos la funcion y le pasamos la variable songsData como argumento

// const buildSongs = (parametro) => {
//   const list = [];
//   console.log(parametro);
//   parametro.forEach( (item) => {
//     console.log(item)
//     const name = item.name;
//     const band = item.band;
//     const text = `La cancion ${name} es de ${band}`
//     list.push(text)
//   });
//   return list
// };
const buildSongs = (parametro) => {
  const list = parametro.map((item) => {
    const name = item.name;
    const band = item.band;
    const text = `La cancion ${name} es de ${band}`;
    return text;
  });
  return list;
};
// const list = songsData.map( (item) => `La cancion ${item.name} es de ${item.band}`);

console.log(buildSongs(songsData));

// let dataArray = [
//   ["Elda ", "Corona"],
//   ["Manuel", "Mendoza"],
//   ["Rafael", "Quintero"],
//   ["Elvira", "Camarillo"],
//   ["Ivan", "Diaz"],
//   ["Alan", "Medina"],
// ];

// const resultadoMap = dataArray.map((item) => {
//   const persona = {
//     name: item[0],
//     apellido: item[1],
//   };
//   return persona;
// });

// console.log(resultadoMap)

// const output = [
//   {
//     name: 'Elda',
//     apellido: 'Corona'
//   },
//   {
//     name: 'Manuel',
//     apellido: 'Mendoza'
//   },
//   {
//     name: 'Rafael',
//     apellido: 'Quintero'
//   }
// ];

// Agrupar las canciones por banda

// output
// {
//   Metallica: [],
//   Poets_of_the_fall: [],
//   Nirvana:[],
// }

const listaNumeros = [1, 4, 5, 8, 9, 0];

const nuevoArreglo = listaNumeros.map((item, index, array) => {
  if (item < 3) {
    return item * 2;
  } else {
    return item;
  }
});

console.log(nuevoArreglo);


// Tomando en cuenta el arreglo de songsData, vamos a crear un arreglo nuevo con la soguiente salida 
// [{
//   name:'cancion1',
//   releaseYear: '199s'
// }]



let dataArray = [
  ["Elda ", "Corona"],
  ["Manuel", "Mendoza"],
  ["Rafael", "Quintero"],
  ["Elvira", "Camarillo"],
  ["Ivan", "Diaz"],
  ["Alan", "Medina"],
];


dataArray.forEach(( item ) => {
console.log(item, 'item')
  item.forEach((subItem) => {
    console.log(subItem, 'subitem')
  });
});

const RickAndMortyCharacters = {
  "info": {
    "count": 826,
    "pages": 42,
    "next": "https://rickandmortyapi.com/api/character?page=2",
    "prev": null
  },
  "results": [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      "location": {
        "name": "Citadel of Ricks",
        "url": "https://rickandmortyapi.com/api/location/3"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        "https://rickandmortyapi.com/api/episode/3",
        "https://rickandmortyapi.com/api/episode/4",
        "https://rickandmortyapi.com/api/episode/5",
        "https://rickandmortyapi.com/api/episode/6",
        "https://rickandmortyapi.com/api/episode/7",
        "https://rickandmortyapi.com/api/episode/8",
        "https://rickandmortyapi.com/api/episode/9",
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/12",
        "https://rickandmortyapi.com/api/episode/13",
        "https://rickandmortyapi.com/api/episode/14",
        "https://rickandmortyapi.com/api/episode/15",
        "https://rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/17",
        "https://rickandmortyapi.com/api/episode/18",
        "https://rickandmortyapi.com/api/episode/19",
        "https://rickandmortyapi.com/api/episode/20",
        "https://rickandmortyapi.com/api/episode/21",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/23",
        "https://rickandmortyapi.com/api/episode/24",
        "https://rickandmortyapi.com/api/episode/25",
        "https://rickandmortyapi.com/api/episode/26",
        "https://rickandmortyapi.com/api/episode/27",
        "https://rickandmortyapi.com/api/episode/28",
        "https://rickandmortyapi.com/api/episode/29",
        "https://rickandmortyapi.com/api/episode/30",
        "https://rickandmortyapi.com/api/episode/31",
        "https://rickandmortyapi.com/api/episode/32",
        "https://rickandmortyapi.com/api/episode/33",
        "https://rickandmortyapi.com/api/episode/34",
        "https://rickandmortyapi.com/api/episode/35",
        "https://rickandmortyapi.com/api/episode/36",
        "https://rickandmortyapi.com/api/episode/37",
        "https://rickandmortyapi.com/api/episode/38",
        "https://rickandmortyapi.com/api/episode/39",
        "https://rickandmortyapi.com/api/episode/40",
        "https://rickandmortyapi.com/api/episode/41",
        "https://rickandmortyapi.com/api/episode/42",
        "https://rickandmortyapi.com/api/episode/43",
        "https://rickandmortyapi.com/api/episode/44",
        "https://rickandmortyapi.com/api/episode/45",
        "https://rickandmortyapi.com/api/episode/46",
        "https://rickandmortyapi.com/api/episode/47",
        "https://rickandmortyapi.com/api/episode/48",
        "https://rickandmortyapi.com/api/episode/49",
        "https://rickandmortyapi.com/api/episode/50",
        "https://rickandmortyapi.com/api/episode/51"
      ],
      "url": "https://rickandmortyapi.com/api/character/1",
      "created": "2017-11-04T18:48:46.250Z"
    },
    {
      "id": 2,
      "name": "Morty Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Citadel of Ricks",
        "url": "https://rickandmortyapi.com/api/location/3"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        "https://rickandmortyapi.com/api/episode/3",
        "https://rickandmortyapi.com/api/episode/4",
        "https://rickandmortyapi.com/api/episode/5",
        "https://rickandmortyapi.com/api/episode/6",
        "https://rickandmortyapi.com/api/episode/7",
        "https://rickandmortyapi.com/api/episode/8",
        "https://rickandmortyapi.com/api/episode/9",
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/12",
        "https://rickandmortyapi.com/api/episode/13",
        "https://rickandmortyapi.com/api/episode/14",
        "https://rickandmortyapi.com/api/episode/15",
        "https://rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/17",
        "https://rickandmortyapi.com/api/episode/18",
        "https://rickandmortyapi.com/api/episode/19",
        "https://rickandmortyapi.com/api/episode/20",
        "https://rickandmortyapi.com/api/episode/21",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/23",
        "https://rickandmortyapi.com/api/episode/24",
        "https://rickandmortyapi.com/api/episode/25",
        "https://rickandmortyapi.com/api/episode/26",
        "https://rickandmortyapi.com/api/episode/27",
        "https://rickandmortyapi.com/api/episode/28",
        "https://rickandmortyapi.com/api/episode/29",
        "https://rickandmortyapi.com/api/episode/30",
        "https://rickandmortyapi.com/api/episode/31",
        "https://rickandmortyapi.com/api/episode/32",
        "https://rickandmortyapi.com/api/episode/33",
        "https://rickandmortyapi.com/api/episode/34",
        "https://rickandmortyapi.com/api/episode/35",
        "https://rickandmortyapi.com/api/episode/36",
        "https://rickandmortyapi.com/api/episode/37",
        "https://rickandmortyapi.com/api/episode/38",
        "https://rickandmortyapi.com/api/episode/39",
        "https://rickandmortyapi.com/api/episode/40",
        "https://rickandmortyapi.com/api/episode/41",
        "https://rickandmortyapi.com/api/episode/42",
        "https://rickandmortyapi.com/api/episode/43",
        "https://rickandmortyapi.com/api/episode/44",
        "https://rickandmortyapi.com/api/episode/45",
        "https://rickandmortyapi.com/api/episode/46",
        "https://rickandmortyapi.com/api/episode/47",
        "https://rickandmortyapi.com/api/episode/48",
        "https://rickandmortyapi.com/api/episode/49",
        "https://rickandmortyapi.com/api/episode/50",
        "https://rickandmortyapi.com/api/episode/51"
      ],
      "url": "https://rickandmortyapi.com/api/character/2",
      "created": "2017-11-04T18:50:21.651Z"
    },
    {
      "id": 3,
      "name": "Summer Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Female",
      "origin": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/6",
        "https://rickandmortyapi.com/api/episode/7",
        "https://rickandmortyapi.com/api/episode/8",
        "https://rickandmortyapi.com/api/episode/9",
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/12",
        "https://rickandmortyapi.com/api/episode/14",
        "https://rickandmortyapi.com/api/episode/15",
        "https://rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/17",
        "https://rickandmortyapi.com/api/episode/18",
        "https://rickandmortyapi.com/api/episode/19",
        "https://rickandmortyapi.com/api/episode/20",
        "https://rickandmortyapi.com/api/episode/21",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/23",
        "https://rickandmortyapi.com/api/episode/24",
        "https://rickandmortyapi.com/api/episode/25",
        "https://rickandmortyapi.com/api/episode/26",
        "https://rickandmortyapi.com/api/episode/27",
        "https://rickandmortyapi.com/api/episode/29",
        "https://rickandmortyapi.com/api/episode/30",
        "https://rickandmortyapi.com/api/episode/31",
        "https://rickandmortyapi.com/api/episode/32",
        "https://rickandmortyapi.com/api/episode/33",
        "https://rickandmortyapi.com/api/episode/34",
        "https://rickandmortyapi.com/api/episode/35",
        "https://rickandmortyapi.com/api/episode/36",
        "https://rickandmortyapi.com/api/episode/38",
        "https://rickandmortyapi.com/api/episode/39",
        "https://rickandmortyapi.com/api/episode/40",
        "https://rickandmortyapi.com/api/episode/41",
        "https://rickandmortyapi.com/api/episode/42",
        "https://rickandmortyapi.com/api/episode/43",
        "https://rickandmortyapi.com/api/episode/44",
        "https://rickandmortyapi.com/api/episode/45",
        "https://rickandmortyapi.com/api/episode/46",
        "https://rickandmortyapi.com/api/episode/47",
        "https://rickandmortyapi.com/api/episode/48",
        "https://rickandmortyapi.com/api/episode/49",
        "https://rickandmortyapi.com/api/episode/51"
      ],
      "url": "https://rickandmortyapi.com/api/character/3",
      "created": "2017-11-04T19:09:56.428Z"
    }
  ]
}


const allEpisodes = [];
RickAndMortyCharacters.results.forEach((item) => {
  item.episode.forEach((episode) => {
    allEpisodes.push(episode)
  });
})
console.log(allEpisodes)


const mentorsArray = [
  {
    name: "Ivan Diaz",
    scores: [
      {
        signature: "HTML",
        score: 8
      },
      {
        signature: "CSS",
        score: 10
      },
      {
        signature: "JS",
        score: 8
      },
      {
        signature: "ReactJS",
        score: 8
      }
    ]
  },
  {
    name: "Alan Medina",
    scores: [
      {
        signature: "HTML",
        score: 8
      },
      {
        signature: "CSS",
        score: 7
      },
      {
        signature: "JS",
        score: 10
      },
      {
        signature: "ReactJS",
        score: 10
      }
    ]
  },
  {
    name: "Elvira Camarillo",
    scores: [
      {
        signature: "HTML",
        score: 9
      },
      {
        signature: "CSS",
        score: 9
      },
      {
        signature: "JS",
        score: 10
      },
      {
        signature: "ReactJS",
        score: 9
      }
    ]
  },
  {
    name: "Alejandra Paez",
    scores: [
      {
        signature: "HTML",
        score: 8
      },
      {
        signature: "CSS",
        score: 10
      },
      {
        signature: "JS",
        score: 9
      },
      {
        signature: "ReactJS",
        score: 10
      }
    ]
  },
  {
    name: "Alejandra Paez",
    scores: [
      {
        signature: "HTML",
        score: 10
      },
      {
        signature: "CSS",
        score: 10
      },
      {
        signature: "JS",
        score: 9
      },
      {
        signature: "ReactJS",
        score: 10
      }
    ]
  }
];

const newArray = [
  {
    name:'ivan',
    average: 9,
  },
  {
    name:'Alan',
    average: 9,
  },
]