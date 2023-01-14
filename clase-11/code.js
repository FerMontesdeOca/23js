const materia = {
  signature: "HTML",
  score: 8,
};

const list = [
  {
    signature: "React",
    score: 8,
  },
  {
    signature: "HTML",
    score: 8,
  },
];

const list2 = [
  {
    signature: "JS",
    score: 8,
  },
];


const resultado = [ ...list, ...list2];

let score = '10';
const { score: scoreOther , signature } = materia;

let copyObject = {...materia};



// ---
// 💪   Ejercicio 8:
// Dado una array de numeros. 
// const array = [1,6,76,2,8,3,9,34,6]
// -obtener el elemento 
//Mayor, 
//Menor, 
//el Promedio y 
// la Suma de los elementos.

const array = [1,6,76,2,8,3,9,34,6]

let getMayor = ( lista ) => {
  // console.log(lista)
  // let mayorNumber = lista[0];
  // for (const iterator of lista) {
  //   if(mayorNumber < iterator){
  //     mayorNumber = iterator
  //   }
  // }
  // return mayorNumber;
  return Math.max(...lista);

};

let getMenor = ( lista ) => {
  // let minorNumber = lista[0];
  // for (const iterator of lista) {
  //   if(minorNumber > iterator){
  //     minorNumber = iterator
  //   }
  // }
  // console.log(minorNumber)
  return Math.min(...lista);
};


// let sumar = (lista) => {
//   let total = 0;
//   lista.forEach((numero) => {
//     total += numero
//   })
//   return {
//     total: total,
//     promedio: total / lista.length
//   }
// };
// console.log(sumar(array))

// console.log(getMayor(array))


let sumar = (lista) => {

  const resultado = lista.reduce((accum, item) => {
    return accum += item
  }, 0);
  console.log(resultado)
  return {
    total: resultado,
    promedio: resultado / lista.length
  }
};
// console.log(sumar(array))

let arrayPersons = [
  {
      name: "Phibee", age: 25, vaccinated: true, gender: "mujer"
  },
  {
      name: "Katrinka", age: 26, vaccinated: false, gender: "mujer"
  },
  {
      name: "Bruno", age: 48, vaccinated: false, gender: "hombre"
  },
  {
      name: "Jon", age: 22, vaccinated: true, gender: "hombre"
  },
  {
      name: "Brian", age: 20, vaccinated: false, gender: "hombre"
  },
  {
      name: "Eugene", age: 38, vaccinated: true, gender: "hombre"
  },
  {
      name: "Big Bob", age: 29, vaccinated: true, gender: "hombre"
  },
  {
      name: "Ximena", age: 40, vaccinated: false, gender: "mujer"
  },
  {
      name: "Paulet", age: 37, vaccinated: false, gender: "mujer"
  },
  {
      name: "Harold", age: 45, vaccinated: true, gender: "hombre"
  },
  {
      name: "Gerald", age: 22, vaccinated: false, gender: "hombre"
  },
  {
      name: "Arnold", age: 35, vaccinated: true, gender: "hombre"
  },
  {
      name: "Gelga", age: 28, vaccinated: true, gender: "mujer"
  },
  {
      name: "Lila", age: 18, vaccinated: true, gender: "mujer"
  },
  {
      name: "Rhonda", age: 18, vaccinated: true, gender: "mujer"
  },
];
// Retornar un array de personas que esten vacunadas solamente
const getVaccinated = (lista) => {
  const resultado = lista.reduce((accum, item) => {
    const { vaccinated } = item;
    if(vaccinated){
      accum = [...accum, item];
    };
    return accum;
  }, []);
  console.log(resultado)
};

getVaccinated(arrayPersons);




