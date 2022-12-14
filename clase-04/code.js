// let persona = {
//     edad: 20,
//     nombre: 'jason',
//     apellido: 'voorhes',
//     direccion: {
//         calle: 'san juan',
//         numero: 234,
//         colonia: 'villas de plata',
//         telefono: {
//             cel: '123123',
//             tel: '345345345'
//         }
//     }
// };

function obtenerValorPorPropiedad (propiedad, propiedad2) {
    if(propiedad && propiedad2){
        console.log(persona[propiedad][propiedad2])
    } else {
        console.log(persona[propiedad])
    }
};

obtenerValorPorPropiedad('direccion', 'numero');





// notacion de corchetes
// const propiedad = 'direccion';
// const otraPropiedad = 'colonia'
// const resultado = persona[propiedad][otraPropiedad];

// console.log(persona[propiedad])

//-----------------------------Ejercicio 1
'Crear objetos javascript que representen los siguientes objetos de la vida real (con todo y métodos'
// - Un automóvil
// - Una casa
// - Una persona
// - Un mentor
// - Un koder
// - Una computadora
// - Un edificio
// - Un teléfono móvil
// - Un menu de restaurante
const cancion = {
    artista:'mana',
    name: 'rayando el sol',

}
const casa = {
    habitaciones:{
        sala: {
            color:'cafe',
        },
        baño: {
            color:'blanco'
        },
        recamara1:{
            color:'verde'
        }
    },
    color:'blanca',
    niveles: {

    },
    dimension: {

    },
    direccion: {

    }
}
console.log(casa.habitaciones.sala.color)

//-----------------------------Ejercicio 2
'Crear una función que reciba un objeto persona como único parámetro y use su atributo nombre para mostrar un saludo'

//crear una funcion 
//crear objeto de persona
// Pasarle el objeto como argumento a la funcion
// acceder ala propiedad de nombre


const persona = {
    nombre: 'freddy',
    apellido: 'voorhes'
};

const buscarNombre = function(informacionDePersona) {
    return `hola ${informacionDePersona.nombre} ${informacionDePersona.apellido}`;
}
console.log( buscarNombre(persona) )







//-----------------------------Ejercicio 3
// 'Dado este objeto'
// Escribe el código necesario para ejecutar su función acelerar

const test = function() {
    return "ruuuun!"
}

let automovil = {
	marca: "FIAT",
	modelo: "500",
	acelerar: test
}

console.log(automovil.acelerar())

// function mifuncion() {

// }
// const test = function() {

// }

