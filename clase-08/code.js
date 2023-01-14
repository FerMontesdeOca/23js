const sumarNumeros = (primerNumero, segundoNumero) => {
    const resultado = primerNumero + segundoNumero;
    console.log(resultado)
    return resultado;
};

// const calcularPropina = (callback) => {
//     const resultadoFinal = callback(4, 5);
//     return resultadoFinal + 30;
// };

setTimeout( () => {
    console.log(props)
    sumarNumeros(2, 5)
}, 5000 );


// ejecutador(primerFuncion, segundaFuncion, terceraFuncion );



// setInterval(() => {
//     console.log('despiertaaaaaaaa')
// }, 3000);

const saludo = ' ivan@asd.com ';
// const string = "The morning is upon us.";

// const resultado = string.slice(-4, -1);
// const resultado = saludo.split('o');
// // console.log(saludo.split(' '))
// console.log(resultado);
// console.log(saludo.includes('O'))
// console.log(saludo)
// string.replace('o', 'x');
// string.replaceAll('o', 'x');
// console.log(string.replaceAll('o', 'x'))

// console.log(saludo.toUpperCase())
// console.log(saludo.toLowerCase())
// console.log(saludo.trim());




/*Ejercicios */
/*
Deducir:
input: "kodemia"
output: "aimedok"
*/

/*
input: "a very large string"
output: "A VeRy lArGe sTrInG" 
input: "abcdefg"
output: "AbCdEfG"
*/

/*
Crear una funcion que me indique si un string comienza con
 -una vocal
 -consonante
 -numero
 -caracter especial
*/


const resultado = '3' === 3;
console.log(resultado)

const oddNumbers = [ 1, 3, 5, 7, 9 ];


// ¿Qué código sobreescribe el cuarto elemento del siguiente arreglo? 

let names = [ "Laura", "Sara", "Antonia", "Erica", "Jessica"]
names[3] = 'juanito'
console.log(names)

const persona = {
    nombre: 'freddy',
};

persona.nombre = 'Jason';

console.log(persona)



/*
Crear una funcion que me indique si un string comienza con
 -una vocal
 -consonante
 -numero
 -caracter especial
*/

const vocales = /[aeiou]/gi;
const consonantes = /^([^aeiou0-9.*+\-?^${}()|[\]\\])/gi;
const numero = /^[0-9]/g;
const caracter = /^[.*+\-?^${}()|[\]\\]+$/;

const analizarString = (string) => {
    const primerLetra = string[0];

    if(primerLetra.match(vocales)){
        console.log('es una vocal')
    } 
    if(primerLetra.match(consonantes)) {
        console.log('es una consonante')
    }
    if(primerLetra.match(numero)) {
        console.log('es una numero')
    }
    if(primerLetra.match(caracter)){
        console.log('es una otro caracter')
    }
};

analizarString('*')

// /[aeiou]/
// const test = 'AHola mundo.'.matchAll(/[aeiou]/g);
// console.log(test);
// const regex = /[aeiou]/g;
// const string = 'AHola mundo.';
// console.log(string.toLowerCase().replace(regex, 'x'));

// console.log('AHola 




// Prototypos

function Persona(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
};

const instancia = new Persona('ivan', 'diaz', 30);
const instancia2 = new Persona('Antonio', 'Magana', 20);

console.log(instancia, '1')
console.log(instancia2, '2')