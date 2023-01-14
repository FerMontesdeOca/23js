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

// Crear un arreglo de mentores donde cada uno tenga su respectivo promedio

// [
//   {
//     nombre:'asd',
//     promedio: 0,
//   },
//   {
//     nombre:'asd',
//     promedio: 0,
//   }
// ]

const getAverageByMentor = (mentorList) => {

  const coverageList = mentorList.map( (item) => {
    const total = item.scores.reduce((accum, item ) => {
      accum += item.score
      return accum
    }, 0 );
    const promedio = total / item.scores.length;

    return {
      nombre: item.name,
      promedio,
    }
  } );
  return coverageList;
};

// console.log(getAverageByMentor(mentorsArray));
// [asd,asd,asd,asd] => 10


// console.log(Math.max(1,2,3,4,))
// console.log(Math.trunc(0.9)) => remueve los decimales
// console.log(Math.floor(4.9)) => redondea hacia abajo
// console.log(Math.ceil(4.9)) => redonde hacia arriba
// console.log(Math.PI)


// const fecha = new Date("03/25/2015");
const fecha = new Date("03/25/2015");
// console.log(fecha.getFullYear())
// console.log(fecha.getMonth())
// console.log(fecha.getDate())
// fecha.setTime(0)
// console.log(fecha)

// fecha + x dias

const sumarDias = (fechaActual, dias) => {
  const minuto = 60000;
  const hora = minuto * 60;
  const diaMili = hora * 24;
  const milisegundosEnDias = diaMili * dias;
  const fechaEnMili = fechaActual.getTime()
  const fechaFinal = fechaEnMili + milisegundosEnDias;
  return new Date(fechaFinal);
};
sumarDias(fecha, 100);


let DateTime = luxon.DateTime;
console.log(DateTime.now().setZone('America/New_York').minus({weeks:1}).endOf('day').toISO())




console.log(DateTime.now().plus({ days: 4 }).toRelativeCalendar()	)
