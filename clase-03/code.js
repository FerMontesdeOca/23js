
// operador ternario
// const edadFreddy = 17;

// const resultado =  edadFreddy >= 18 ? 'es mayor de edad' : console.log(prompt);
// console.log(resultado)


// function

// function mifuncion () {
//     console.log('se esta ejecutando')
// }

// mifuncion();

// mifuncion();

//-------
//funcion anonima o de expresion





// const funcionSinNombre = function (){
//     let nombre = 'ivan';

    
// } 

const primerNumero = parseInt(prompt('dame un numero'));
const segundoNumero = parseInt(prompt('dame otro numero'));


const sumarNumeros = function( num1, num2 ) {
    const resultado = num1 + num2;
    
    if(resultado > 100) {
        return 'es mayor que 100'
    } else {
        return 'es menor que 100'
    }
};

prompt('asdlkasdlkj')
parseInt('100')

const resultadoFinal = sumarNumeros(primerNumero,segundoNumero);

console.log(resultadoFinal, 'asdasdasd');



// - Crear una funcion que recibe un nombre y un apellido y devuelve un saludo por nombre 
// y si no se da un nombre completo saludar simplemente por 'amigo';

// - Crear una funcion que altere el valor de una variable global cada que se ejecuta (no debe retornar nada)

// - Crear una funcion que reciba un parametro de tipo numero y regrese true si el parametro es un numero par o false si es un numero impar

// -Crear funcion que reciba dos parametros
// -dedidir si concatenamos o retornamos un saludo de amigo
// -Concatenar el nombre y apellido
// -Si no tiene nombre y apellido retornar el saludo amigo
// -si tiene nombre y apellido retornar el nombre completo

const crearNombre = function(nombre, apellido) {
    if(nombre && apellido){
        const nombreCompleto = nombre + apellido;
        return nombreCompleto
    } else {
        const saludo = 'hola amigo';
        return saludo;
    }
};

crearNombre('ivan');




