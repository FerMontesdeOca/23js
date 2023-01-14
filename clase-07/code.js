



// const miArrow = (numero) => numero + 5;
// const miArrow = (numero, numero2) => {
//   console.log(numero2)
//   if(numero > 4) {
//     return numero + 4
//   } else {
//     return numero - 4
//   }
// };

const miArrow = (numero) => numero > 4 ? numero + 4 : numero -4; 


const edadPersona = 18;

edadPersona >= 18 ? 'es adulto' : 'Es menor de edad'



console.log(miArrow(5, 4))


function buscarNumero(array, numeroAbuscar) {
  let accum = 0;
  for(const numero of array){
      if(numero === numeroAbuscar ){
      accum++;
    }
  }
  return `El numero ${numeroAbuscar} se repite ${accum} veces`
};

const buscarNumero = (array, numeroAbuscar) => {
  let accum = 0;
  for(const numero of array){
      if(numero === numeroAbuscar ){
      accum++;
    }
  }

  return `El numero ${numeroAbuscar} se repite ${accum} veces`
}



/*
Ejercicio 1:
Dado la siguiente estructura de datos obtener
- La cancion con más reproducciones
- La cancion con más likes
*/
const songsData = [
  {
      name: "¿Dónde jugarán los niños?",
      band: "Maná",
      releaseYear: "1992",
      statistics: {
          likes: 20000,
          reproductions: 8000
      },
  },
  {
      name: "La muralla verde",
      band: "Enanitos Verdes",
      releaseYear: "1986",
      statistics: {
          likes: 21000,
          reproductions: 19000
      },
  },
  {
      name: "Te Ví En Un Tren",
      band: "Enanitos Verdes",
      releaseYear: "1987",
      statistics: {
          likes: 20000,
          reproductions: 23490
      },
  },
  {
      name: "Mariposa Traicionera",
      band: "Maná",
      releaseYear: "2002",
      statistics: {
          likes: 12000,
          reproductions: 25690
      },
  },
  {
      name: "Rayando el Sol",
      band: "Maná",
      releaseYear: "1990",
      statistics: {
          likes: 12000,
          reproductions: 18000
      },
  },
  {
      name: "La celula que explota",
      band: "Jaguares",
      releaseYear: "1999",
      statistics: {
          likes: 12000,
          reproductions: 23421
      },
  },
  {
      name: "No dejes que...",
      band: "Jaguares",
      releaseYear: "1999",
      statistics: {
          likes: 12345,
          reproductions: 10000
      },
  }
];

/*
Ejercicio 2:
Pedir al usuario un numero entre 10 y 100
Imprimir todos los numeros pares que existen entre 1 y ese numero
*/

/*
Ejercicio 3:
Imprimir en consola la suma total de todos los digitos de una cantidad p.ej. "1234" -> 10
*/

/*Ejercicio 4:
Realizar una funcion que genere un numero aleatorio entre 1 y 10,El usuario debe adivinarlo con las pistas de "es mayor" o es menor en un numero determinado de intentos
*/