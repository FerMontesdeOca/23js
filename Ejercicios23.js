// 💪   Ejercicio 1:
//     Solicitar el nombre completo de un usuario e indicarle cuantos caracteres tiene su nombre
// ---

// 💪   Ejercicio 2:
//     Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.
// ---
// 💪   Ejercicio 3:
//     Del texto: 
//     “Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
//     al estudiante que tiene a su lado”

//     - Contar cuántas veces se usa la palabra “estudiante” y reemplazar todas las coincidencias 
//         por la palabra “Koder”, 
//     - y mostrar el mensaje de nuevo al usuario

// ---
// 💪   Ejercicio 4:
//     Comparar 2 string, y determinar cual de los dos es el más largo

//     input: “string 1”, “Some large string”
//     Output: “el string {string 1} es el más largo”
// ---

// 💪   Ejercicio 5:
//     Dado un string de dos palabras realizar una función que devuelva la palabra más larga
//     input: ‘Programación Javascript’
//     Output: ‘Programación’

// ---

// 💪   Ejercicio 6:
//     Crear un programa que permita a una cadena de texto muestrar el caracter '-' ebtre cada caracter de la cadena.

// ---
// 💪   Ejercicio 7:
//     Realizar un programa que muestre una piramide del 1 al 10 de las siguiente formas:

// Forma 1:

// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

// Forma 2:
// 999999999
// 88888888
// 7777777
// 666666
// 55555
// 4444
// 333
// 22
// 1


// ---
// 💪   Ejercicio 8:
// Dado una array de numeros. 
// const array = [1,6,76,2,8,3,9,34,6]
// -obtener el elemento Mayor, Menor, el Promedio y la Suma de los elementos.


// ---
// 💪   Ejercicio 9:

// Crear un programa que dado un array de strings, un número, y debe de imprimir cada uno de los items del array con los caracteres limitados al número ingresado.

// input :
// const example = [
//     'Bacon ipsum dolor amet corned',
//     'Buffalo pork ball tip',
//     'Leberkas short loin pork loin,
// ]

// number: 4

// output: [
//     'Baco',
//     'Buff',
//     'Lebe'
// ]

// ---
// 💪   Ejercicio 10:
// Crear un programa que dados los datos de 3 lados de un triangulo, determinar el área del triangulo y mostrarla en un mensaje en otro mensaje, indicar si el triangulo es isoseles, equilátero o escaleno.

// input: 3,3,3
// output: Es un triangulo equilatero que tiene como area 4.5



// ---
// 💪   Ejercicio 11:
// tomando en cuenta esta estructura de datos vamos a obtener lo sigueinte:
// const mentorsArray = [
//   {
//     name: "Ivan Diaz",
//     scores: [
//       {
//         signature: "HTML",
//         score: 8,
//       },
//       {
//         signature: "CSS",
//         score: 10
//       },
//       {
//         signature: "JS",
//         score: 8
//       },
//       {
//         signature: "ReactJS",
//         score: 8
//       }
//     ]
//   },
//   {
//     name: "Alan Medina",
//     scores: [
//       {
//         signature: "HTML",
//         score: 8
//       },
//       {
//         signature: "CSS",
//         score: 7
//       },
//       {
//         signature: "JS",
//         score: 10
//       },
//       {
//         signature: "ReactJS",
//         score: 10
//       }
//     ]
//   },
//   {
//     name: "Elvira Camarillo",
//     scores: [
//       {
//         signature: "HTML",
//         score: 9
//       },
//       {
//         signature: "CSS",
//         score: 9
//       },
     
//       {
//         signature: "ReactJS",
//         score: 9
//       }
//     ]
//   },
//   {
//     name: "Alejandra Paez",
//     scores: [
//       {
//         signature: "HTML",
//         score: 8
//       },
//       {
//         signature: "CSS",
//         score: 10
//       },
     
//       {
//         signature: "ReactJS",
//         score: 10
//       }
//     ]
//   },
// ];
// -Promedio por materias


// 💪   Ejercicio 1:
//     Solicitar el nombre completo de un usuario e indicarle cuantos caracteres tiene su nombre
// ---

const nombre = 'Freddy Krueger';

const counterCaracter = (persona) => {
  console.log(persona)
  const counter = persona.replaceAll(' ', '').length;
  return `Esta palabra tiene ${counter}`
};

console.log(counterCaracter(nombre))


const materia = {
  signature: "HTML",
  score: 8,
};

let score = '10';

const { score: scoreOther , signature } = materia;

let copyObject = {...materia};



