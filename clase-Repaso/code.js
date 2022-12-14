// Crear una funcion que genere una tabla de multiflicar basada en el parametro que le enviemos 

// input: 2
// output:
// 2 x 1 =?
// 2 x 2 =?
// 2 x 3 =2
// 2 x 4 =2
// 2 x 5 =2
// 2 x 6 =2
// 2 x 7 =2
// 2 x 8 =2
// 2 x 9 =2
// 2 x 10 =2

// Crear una funcion
// crear un ciclo for hasta el 10
// en cada iteracion se multiplicara por i
// concatenar el resultado
// imprimirlo en la terminal
// ejecutar funcion con los argumentos


function crearTabla (numero, limite) {
    for(let index = 1; index <= limite; index++){
        let resultado = `${numero} x ${index} = ${numero * index}`;
        console.log(resultado)
    }
};

crearTabla(7, 4);


// Crear una funcion que analize una palabra y me diga si termina con .

// Crear la funcion
// Ejectar la funcion
// Pasarle el argumento
// comparar la palabra
    //si lleva punto al final retornar true
    //no lleva punto al final retornar false

// input: 'holaMundo.'
// output: true

// input: 'Bye'
// output: false


function buscarPunto(palabra) {
    if ( palabra[palabra.length -1] === '.' ) {
        return true
    } else {
        return false
    }
};
const saludo = 'HolaMundo.';




// Dado esta estructura de datos vamos a genenerar un nuevo arreglo con un string que represente lo sigueinte 'koderX:J.V'

// output
// ['koder1:J.V', 'koder2:F.M']

//Crear una funcion
//Ejecutar la funcion
//Enviarle el arreglo como argumento
// Declarar un arreglo vacio
// Iterar el arreglo de koders
// obtener la primer letra de la propiedad nombre
// obtener la primer letra de la propiedad apellido
// concatenar la palbra koderX con la primer letra de nombre y la primer letra de apellido
// Agregar el string generado al arreglo vacio

const koders = [
    {
        nombre: 'Julio',
        apellido: 'Velazquez',
    },
    {
        nombre: 'Fernando',
        apellido: 'Montes',
    }
];

function generarKoders(listaKoders) {
    const resultado = [];

    for (let index = 0; index < listaKoders.length; index++) {
        const element = listaKoders[index];
        const inicialNombre = element.nombre[0];
        const inicialApellido = element.apellido[0];
        const koder = `koder${index}:${inicialNombre}.${inicialApellido}`
        resultado.push(koder);
    };
    console.log(resultado)
};

generarKoders(koders);



