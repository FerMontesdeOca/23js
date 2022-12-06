

// //aritmeticos
// +
// -
// / 
// * multiplicacion
// % modulo
// += acumulativo
// **
// ++ incremento
// --  decremento
// // comparacion
// >


// let primerNumero= prompt('dame un numero');
// let segundoNumero = prompt('dame otro numero');
// console.log(parseInt(primerNumero) - parseInt(segundoNumero))
// console.log(parseInt(primerNumero) * parseInt(segundoNumero))

let edad = 5;
// console.log(++edad)
console.log(edad--)
console.log(--edad)


// // logicos
// || con que uno se cumpla todo bien!
// &&  todo o nada 
// !
// >
// <
// ==
// ===
// !=

// console.log( 11 < 10 || 3 < 9 )
// console.log( 11 < 10 && 3 < 9 );

const primerNumero = 10;
const segundoNumero = '10'

// console.log(primerNumero == segundoNumero);
// '! = ='
// '! ='
// ===
// !==


console.log(primerNumero !== segundoNumero);




// if( edadFreddyKrueger >= 18 ) {
//     console.log('entrale freddy');
// } else if (tieneINE) {
//     console.log('entrale freddy si traes INE');
// } else {
//     console.log('no puedes entrar')
// };


const edadFreddyKrueger = 17;
const tieneINE = false;
let usuarioEsValido = false;

if( evalucion && evaluacion2 && evaluacion3 ) {
    console.log('ve a tramitarla')
    usuarioEsValido = true;
}
usuarioEsValido = true;

// if( edadFreddyKrueger >= 18 || tieneINE ) {
//     console.log('entrale freddy');
// } else {
//     console.log('no puedes entrar')
// }

// const calificacion = parseInt('10');

// if(calificacion <= 60){
//     console.log('F')
// } else if(calificacion <= 70) {
//     console.log('D')
// } else if(calificacion <= 80) {
//     console.log('C')
// } else {
//     console.log('ingresa un numero valido');
// }

const calificacion = parseInt('60');

let resultado = '';

switch (calificacion) {
    case 60:
        resultado = 'F';
        break;
    case 70:
        resultado = 'D';
        break;
    default:
        resultado = 'otro'
}

console.log(resultado)








