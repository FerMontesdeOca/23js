// // Crear una funcion que genere una tabla de multiflicar basada en el parametro que le enviemos 

// // input: 2
// // output:
// // 2 x 1 =?
// // 2 x 2 =?
// // 2 x 3 =2
// // 2 x 4 =2
// // 2 x 5 =2
// // 2 x 6 =2
// // 2 x 7 =2
// // 2 x 8 =2
// // 2 x 9 =2
// // 2 x 10 =2

// // Crear una funcion
// // crear un ciclo for hasta el 10
// // en cada iteracion se multiplicara por i
// // concatenar el resultado
// // imprimirlo en la terminal
// // ejecutar funcion con los argumentos


// function crearTabla (numero, limite) {
//     for(let index = 1; index <= limite; index++){
//         let resultado = `${numero} x ${index} = ${numero * index}`;
//         console.log(resultado)
//     }
// };

// crearTabla(7, 4);


// // Crear una funcion que analize una palabra y me diga si termina con .

// // Crear la funcion
// // Ejectar la funcion
// // Pasarle el argumento
// // comparar la palabra
//     //si lleva punto al final retornar true
//     //no lleva punto al final retornar false

// // input: 'holaMundo.'
// // output: true

// // input: 'Bye'
// // output: false


// function buscarPunto(palabra) {
//     if ( palabra[palabra.length -1] === '.' ) {
//         return true
//     } else {
//         return false
//     }
// };
// const saludo = 'HolaMundo.';




// // Dado esta estructura de datos vamos a genenerar un nuevo arreglo con un string que represente lo sigueinte 'koderX:J.V'

// // output
// // ['koder1:J.V', 'koder2:F.M']

// //Crear una funcion
// //Ejecutar la funcion
// //Enviarle el arreglo como argumento
// // Declarar un arreglo vacio
// // Iterar el arreglo de koders
// // obtener la primer letra de la propiedad nombre
// // obtener la primer letra de la propiedad apellido
// // concatenar la palbra koderX con la primer letra de nombre y la primer letra de apellido
// // Agregar el string generado al arreglo vacio

// const koders = [
//     {
//         nombre: 'Julio',
//         apellido: 'Velazquez',
//     },
//     {
//         nombre: 'Fernando',
//         apellido: 'Montes',
//     }
// ];

// function generarKoders(listaKoders) {
//     const resultado = [];

//     for (let index = 0; index < listaKoders.length; index++) {
//         const element = listaKoders[index];
//         const inicialNombre = element.nombre[0];
//         const inicialApellido = element.apellido[0];
//         const koder = `koder${index}:${inicialNombre}.${inicialApellido}`
//         resultado.push(koder);
//     };
//     console.log(resultado)
// };

// generarKoders(koders);



// 💪   Ejercicio 1:
//     Solicitar el nombre completo de un usuario e indicarle cuantos caracteres tiene su nombre
// ---
// esta palabra tiene 22 caracteres

const nombre = 'Freddy Krueger';

const counterCaracter = (persona) => {
  const counter = persona.replaceAll(' ', '').length;
  return `Esta palabra tiene ${counter} caracteres`
};

// console.log(counterCaracter(nombre))


// 💪   Ejercicio 2:
//     Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.
// ---

const buscarVocales = (string) => {
    const vocales = /[aeiou]/gi;
    const result = string.match(vocales).length
    return `Esta palabra tiene ${result} vocales`
};

console.log(buscarVocales(nombre));


// 💪   Ejercicio 3:
//     Del texto: 
//     “Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
//     al estudiante que tiene a su lado”

//     - Contar cuántas veces se usa la palabra “estudiante” y reemplazar todas las coincidencias 
//         por la palabra “Koder”, 
//     - y mostrar el mensaje de nuevo al usuario

const frase = 'Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado';

const searchString = (string) => {
    const palabra = /estudiante/gi;
    const counter = string.match(palabra).length;
    const result = {
        frase: string.replaceAll('estudiante', 'Koder'),
        coincidencias: counter
    }    
    return result;
};

// console.log(searchString(frase))

// ---
// 💪   Ejercicio 4:
//     Comparar 2 string, y determinar cual de los dos es el más largo

//     input: “string 1”, “Some large string”
//     Output: “el string {string 1} es el más largo”
// ---
const string1 = "Some large string";
const string2 = "Some large strsing";

// const calculateLarge = (parametro1, parametro2) => {
//     if( parametro1.length > parametro2.length ){
//         return `el string "${parametro1}" es el más largo`
//     } else if (parametro1.length === parametro2.length){
//         return 'los dos son iguales'
//     } else {
//         return `el string "${parametro2}" es el más largo`
//     }
// };

const calculateLarge = (parametro1, parametro2) => {
    let palabraMasLarga = '';
    if(parametro1.length > parametro2.length){
        palabraMasLarga = parametro1;
        return `la palabra mas larga es: ${palabraMasLarga}`
    } else if(parametro1.length === parametro2.length) {
        palabraMasLarga = 'los dos son iguales'
        return palabraMasLarga;
    } else {
        palabraMasLarga = parametro2;
        return `la palabra mas larga es: ${palabraMasLarga}`
    }
};

// console.log(calculateLarge(string1, string2))

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

// for (let index = 1; index <= 9; index++) {
//     let linea = '';
//     for (let interno = 1; interno <= index; interno++) {
//         linea += index
//     }
//     console.log(linea);
// };

for (let index = 9; index >= 1; index--) {
    let linea = '';
    for (let interno = 1; interno <= index; interno++) {
        linea += index
    }
    console.log(linea);
};
