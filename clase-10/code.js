const mentorsArray = [
  {
    name: "Ivan Diaz",
    scores: [
      {
        signature: "HTML",
        score: 8,
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
        signature: "ReactJS",
        score: 10
      }
    ]
  },
];
// Tomando en cuenta la estructura de datos de mentorsArray debes crear un arreglo nuevo con el promedio de cada mentor 
// output:
// const newArray = [
//   {
//     name:'ivan',
//     average: 9,
//   },
//   {
//     name:'Alan',
//     average: 9,
//   },
// ]

const getAverageByMentor = (mentores) => {

  const mentorsList = mentores.map((item) => {
    const { scores, name } = item;
    let average = 0;
    scores.forEach((resultado) => {
      average += resultado.score
    });

    const mentorResult = {
      name: name,
      average: average / item.scores.length
    };
    return mentorResult;
  });
  return mentorsList;
};

// console.log( getAverageByMentor(mentorsArray))

const numeros = [1,2,5,3,8,99,4]
const personas = [
  {
    nombre: 'penny wise',
    edad: 19,
  },
  {
    nombre: 'freddy',
    edad: 23,
  },
  {
    nombre: 'jason',
    edad: 12,
  }
];

const mayores = personas.filter((persona) => persona.edad >= 18);
const resultado = numeros.filter((item) => item > 5 );
 
const mentoresConA = mentorsArray.filter((item) => item.name[0].toUpperCase() === 'X')
console.log(mentoresConA)

// Obtener los mentores que tengan un promedio debajo de 8

const filterMentorsByAverage = (averageMentor) => {
  const averages = getAverageByMentor(averageMentor);
  const resultFinal = averages.filter((mentor) => mentor.average < 9 );
  return resultFinal
};
console.log(filterMentorsByAverage(mentorsArray))

// Crear funcion que obtenga los mentores por materia
const getMentorsBySignature = (mentorList, search) => {
  let resultMentors = [];

  mentorList.forEach((mentor) => {
    const result = mentor.scores.filter((clase) => clase.signature === search);
    if(result.length > 0){
      resultMentors = [...resultMentors, ...result];
    }
  });
  return resultMentors
};

// console.log(getMentorsBySignature(mentorsArray, 'JS'));

const persona = {
  name: 'Jason vorhees',
  apellido: 'diaz',
  edad: '19'
};

const user = {
  name: 'calamardo',
  apellido: 'elegante',
  edad: '19'
};

const { name: namePersona, apellido } = persona;
const { edad, name, } = user;

const nombres = ['alison','danny', 'freddy'];
const [segundo, primero] = nombres;

console.log(segundo)

const test = ({ apellido, name }) => {
  // const { name } = persona;
  const resultado = `soy ${name} ${apellido}`
  console.log(resultado)
};

test(user)





