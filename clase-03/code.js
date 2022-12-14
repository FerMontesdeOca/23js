/*
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

// const primerNumero = parseInt(prompt('dame un numero'));
// const segundoNumero = parseInt(prompt('dame otro numero'));


const sumarNumeros = function( num1, num2 ) {
    const resultado = num1 + num2;
    
    if(resultado > 100) {
        return 'es mayor que 100'
    } else {
        return 'es menor que 100'
    }
};

// const resultadoFinal = sumarNumeros(primerNumero,segundoNumero);

// console.log(resultadoFinal, 'asdasdasd');



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

// crearNombre('ivan');

const RickAndMortyCharacters = {
    "info": {
      "count": 826,
      "pages": 42,
      "next": "https://rickandmortyapi.com/api/character?page=2",
      "prev": null
    },
    "results": [
      {
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
          "name": "Earth (C-137)",
          "url": "https://rickandmortyapi.com/api/location/1"
        },
        "location": {
          "name": "Citadel of Ricks",
          "url": "https://rickandmortyapi.com/api/location/3"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        "episode": [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2",
          "https://rickandmortyapi.com/api/episode/3",
          "https://rickandmortyapi.com/api/episode/4",
          "https://rickandmortyapi.com/api/episode/5",
          "https://rickandmortyapi.com/api/episode/6",
          "https://rickandmortyapi.com/api/episode/7",
          "https://rickandmortyapi.com/api/episode/8",
          "https://rickandmortyapi.com/api/episode/9",
          "https://rickandmortyapi.com/api/episode/10",
          "https://rickandmortyapi.com/api/episode/11",
          "https://rickandmortyapi.com/api/episode/12",
          "https://rickandmortyapi.com/api/episode/13",
          "https://rickandmortyapi.com/api/episode/14",
          "https://rickandmortyapi.com/api/episode/15",
          "https://rickandmortyapi.com/api/episode/16",
          "https://rickandmortyapi.com/api/episode/17",
          "https://rickandmortyapi.com/api/episode/18",
          "https://rickandmortyapi.com/api/episode/19",
          "https://rickandmortyapi.com/api/episode/20",
          "https://rickandmortyapi.com/api/episode/21",
          "https://rickandmortyapi.com/api/episode/22",
          "https://rickandmortyapi.com/api/episode/23",
          "https://rickandmortyapi.com/api/episode/24",
          "https://rickandmortyapi.com/api/episode/25",
          "https://rickandmortyapi.com/api/episode/26",
          "https://rickandmortyapi.com/api/episode/27",
          "https://rickandmortyapi.com/api/episode/28",
          "https://rickandmortyapi.com/api/episode/29",
          "https://rickandmortyapi.com/api/episode/30",
          "https://rickandmortyapi.com/api/episode/31",
          "https://rickandmortyapi.com/api/episode/32",
          "https://rickandmortyapi.com/api/episode/33",
          "https://rickandmortyapi.com/api/episode/34",
          "https://rickandmortyapi.com/api/episode/35",
          "https://rickandmortyapi.com/api/episode/36",
          "https://rickandmortyapi.com/api/episode/37",
          "https://rickandmortyapi.com/api/episode/38",
          "https://rickandmortyapi.com/api/episode/39",
          "https://rickandmortyapi.com/api/episode/40",
          "https://rickandmortyapi.com/api/episode/41",
          "https://rickandmortyapi.com/api/episode/42",
          "https://rickandmortyapi.com/api/episode/43",
          "https://rickandmortyapi.com/api/episode/44",
          "https://rickandmortyapi.com/api/episode/45",
          "https://rickandmortyapi.com/api/episode/46",
          "https://rickandmortyapi.com/api/episode/47",
          "https://rickandmortyapi.com/api/episode/48",
          "https://rickandmortyapi.com/api/episode/49",
          "https://rickandmortyapi.com/api/episode/50",
          "https://rickandmortyapi.com/api/episode/51"
        ],
        "url": "https://rickandmortyapi.com/api/character/1",
        "created": "2017-11-04T18:48:46.250Z"
      },
      {
        "id": 2,
        "name": "Morty Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
          "name": "unknown",
          "url": ""
        },
        "location": {
          "name": "Citadel of Ricks",
          "url": "https://rickandmortyapi.com/api/location/3"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        "episode": [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2",
          "https://rickandmortyapi.com/api/episode/3",
          "https://rickandmortyapi.com/api/episode/4",
          "https://rickandmortyapi.com/api/episode/5",
          "https://rickandmortyapi.com/api/episode/6",
          "https://rickandmortyapi.com/api/episode/7",
          "https://rickandmortyapi.com/api/episode/8",
          "https://rickandmortyapi.com/api/episode/9",
          "https://rickandmortyapi.com/api/episode/10",
          "https://rickandmortyapi.com/api/episode/11",
          "https://rickandmortyapi.com/api/episode/12",
          "https://rickandmortyapi.com/api/episode/13",
          "https://rickandmortyapi.com/api/episode/14",
          "https://rickandmortyapi.com/api/episode/15",
          "https://rickandmortyapi.com/api/episode/16",
          "https://rickandmortyapi.com/api/episode/17",
          "https://rickandmortyapi.com/api/episode/18",
          "https://rickandmortyapi.com/api/episode/19",
          "https://rickandmortyapi.com/api/episode/20",
          "https://rickandmortyapi.com/api/episode/21",
          "https://rickandmortyapi.com/api/episode/22",
          "https://rickandmortyapi.com/api/episode/23",
          "https://rickandmortyapi.com/api/episode/24",
          "https://rickandmortyapi.com/api/episode/25",
          "https://rickandmortyapi.com/api/episode/26",
          "https://rickandmortyapi.com/api/episode/27",
          "https://rickandmortyapi.com/api/episode/28",
          "https://rickandmortyapi.com/api/episode/29",
          "https://rickandmortyapi.com/api/episode/30",
          "https://rickandmortyapi.com/api/episode/31",
          "https://rickandmortyapi.com/api/episode/32",
          "https://rickandmortyapi.com/api/episode/33",
          "https://rickandmortyapi.com/api/episode/34",
          "https://rickandmortyapi.com/api/episode/35",
          "https://rickandmortyapi.com/api/episode/36",
          "https://rickandmortyapi.com/api/episode/37",
          "https://rickandmortyapi.com/api/episode/38",
          "https://rickandmortyapi.com/api/episode/39",
          "https://rickandmortyapi.com/api/episode/40",
          "https://rickandmortyapi.com/api/episode/41",
          "https://rickandmortyapi.com/api/episode/42",
          "https://rickandmortyapi.com/api/episode/43",
          "https://rickandmortyapi.com/api/episode/44",
          "https://rickandmortyapi.com/api/episode/45",
          "https://rickandmortyapi.com/api/episode/46",
          "https://rickandmortyapi.com/api/episode/47",
          "https://rickandmortyapi.com/api/episode/48",
          "https://rickandmortyapi.com/api/episode/49",
          "https://rickandmortyapi.com/api/episode/50",
          "https://rickandmortyapi.com/api/episode/51"
        ],
        "url": "https://rickandmortyapi.com/api/character/2",
        "created": "2017-11-04T18:50:21.651Z"
      },
      {
        "id": 3,
        "name": "Summer Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female",
        "origin": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"
        },
        "location": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        "episode": [
          "https://rickandmortyapi.com/api/episode/6",
          "https://rickandmortyapi.com/api/episode/7",
          "https://rickandmortyapi.com/api/episode/8",
          "https://rickandmortyapi.com/api/episode/9",
          "https://rickandmortyapi.com/api/episode/10",
          "https://rickandmortyapi.com/api/episode/11",
          "https://rickandmortyapi.com/api/episode/12",
          "https://rickandmortyapi.com/api/episode/14",
          "https://rickandmortyapi.com/api/episode/15",
          "https://rickandmortyapi.com/api/episode/16",
          "https://rickandmortyapi.com/api/episode/17",
          "https://rickandmortyapi.com/api/episode/18",
          "https://rickandmortyapi.com/api/episode/19",
          "https://rickandmortyapi.com/api/episode/20",
          "https://rickandmortyapi.com/api/episode/21",
          "https://rickandmortyapi.com/api/episode/22",
          "https://rickandmortyapi.com/api/episode/23",
          "https://rickandmortyapi.com/api/episode/24",
          "https://rickandmortyapi.com/api/episode/25",
          "https://rickandmortyapi.com/api/episode/26",
          "https://rickandmortyapi.com/api/episode/27",
          "https://rickandmortyapi.com/api/episode/29",
          "https://rickandmortyapi.com/api/episode/30",
          "https://rickandmortyapi.com/api/episode/31",
          "https://rickandmortyapi.com/api/episode/32",
          "https://rickandmortyapi.com/api/episode/33",
          "https://rickandmortyapi.com/api/episode/34",
          "https://rickandmortyapi.com/api/episode/35",
          "https://rickandmortyapi.com/api/episode/36",
          "https://rickandmortyapi.com/api/episode/38",
          "https://rickandmortyapi.com/api/episode/39",
          "https://rickandmortyapi.com/api/episode/40",
          "https://rickandmortyapi.com/api/episode/41",
          "https://rickandmortyapi.com/api/episode/42",
          "https://rickandmortyapi.com/api/episode/43",
          "https://rickandmortyapi.com/api/episode/44",
          "https://rickandmortyapi.com/api/episode/45",
          "https://rickandmortyapi.com/api/episode/46",
          "https://rickandmortyapi.com/api/episode/47",
          "https://rickandmortyapi.com/api/episode/48",
          "https://rickandmortyapi.com/api/episode/49",
          "https://rickandmortyapi.com/api/episode/51"
        ],
        "url": "https://rickandmortyapi.com/api/character/3",
        "created": "2017-11-04T19:09:56.428Z"
      }
    ]
  }

  for (i=0; i< character.length; i++){  
    console.log(character[i].name)
  }






  const character = {
    id: 183,
    name: "Johnny Depp",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth (C-500A)",
      url: "https://rickandmortyapi.com/api/location/23"
    },
    location: {
      name: "Earth (C-500A)",
      url: "https://rickandmortyapi.com/api/location/23"
    },
    image: "https://rickandmortyapi.com/api/character/avatar/183.jpeg",
    episode: [
      "https://rickandmortyapi.com/api/episode/8"
    ],
    url: "https://rickandmortyapi.com/api/character/183",
    parents: {
        mother: {
            name:'Gelga Pataki',
            species: "Human",
        },
        father: {
            name:'Rick Sanchez',
            species: "Human",
        },
        brother: {
            name:'Gerarld',
            species: "Human",
        },
        sister: {
            name:'Vivi',
            species: "Human",
        },
    },
    created: "2017-12-29T18:51:29.693Z"
  }

// output:
//   {
//     mother: 'Gelga Pataki',
//     father: 'Rick Sanchez',
//     brother:'Gerarld'
//   }

// Crear funcion que reciba el objeto de caracter
// Acceder a las propiedad parents
// Acceder a cada una de la propiedades de parents
// crear un objeto donde voy guardar los valores
// asigno los valores a las propiedades
// retornar el objeto final

function getInfoParents(info) {
    const result = {
        mother: info.parents.mother.name,
        father: info.parents.father.name,
        brother: info.parents.brother.name,
        sister: info.parents.sister.name
    }
    return result;    
}

console.log(getInfoParents(character));

const numeros = [ 1,5,6];

numeros.push(6,5);

console.log(numeros)
//Crear una funcion que reciba por parametro un array y me 
//debe retornar un nuevo array con elementos menores a 5

//Crear una funcion
// declarar el array que se le va a pasar ala fucion
// declarar un parametro para recibir el arreglo
// ejecutar la funcion y pasarle el arreglo como argumento

const listaNumeros = [ 10, 3, 50, 3, 1, 5];
const otherList = [ 10, 1,2,3,4,5]

const filtrarNumeros = function (array) {
    const newArray = [];

    for (let i=0; i < array.length; i++){

        if( array[i] < 5 ) {
            newArray.push(array[i])            
            console.log(newArray);
        }

    }
    return newArray;
};
// const result = filtrarNumeros(listaNumeros);
const result2 = filtrarNumeros(otherList);

result2.push({
    lol:'asdasd'
}, 'asd', [])
console.log(result2,)
*/


//crea una funcion que solicite al usario un numero y 
//guardaremos el dato en un arreglo para despues retornarlo

//crear la funcion 
// pedir el numero al usuario
//crear una variable con un arreglo vacio
// agregamos al arreglo vacio el numero que solicitamos al usario
// retornamos el arreglo con los datos gurdados

// const saveUserData = function (userNumber) {
//     const accum = [];
//     console.log(accum);
//     accum.push(userNumber);
//     console.log(accum);
// };

// let response = parseInt(prompt('dame un nemero'));

// do {
//     saveUserData(response); 
//     response = parseInt(prompt('dame un nemero'));
// } while (response !== 'no');


const saveUserData = function (number) {
    const accum = [];
    accum.push(number);
    return accum;
};

saveUserData(); 


let response = parseInt(prompt('dame un nemero'));

if(response !== 'no') {
    const result = saveUserData(response); 
}




