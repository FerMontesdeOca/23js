const main = document.querySelector('#divx');

console.log(main.parentNode)

// // crear un formulario el cual tenga
// // first name text
// // last name text
// // birthdate date
// // gender radio button
// // country select
// // lenguajes de ´programacion checkbox  4 opciones
// // description text area

// // Agregar un botton que al darle click 
// // - validar que ningun campo este vacio
// // mostar la informacion camptura en un objeto en la consola

// // {
// //   firstName: 'asdasdasd',
// //   birthdate: 112-09-02
// // }

// // -plus validar que ningun campo este vacio
// let response = {
//     firstName: '',
//     lastName: '',
//     birthdate:'',
//     gender:'',
//     country:'',
//     languge:'',
//     description: '',
// };
// let personas = [];

// const form = document.querySelector('form');
// const formList = document.querySelectorAll('#form-main input');
// const select = document.querySelector('#country');
// const textArea = document.querySelector('#textArea');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const values = Object.values(response);
//     const errors = values.filter((element) => !element)
//     if(errors.length > 0) {
//         alert('esta incompleto')
//     } else {
//         personas.push(response)
//         printItem(response)
//         response = {
//             firstName: '',
//             lastName: '',
//             birthdate:'',
//             gender:'',
//             country:'',
//             languge:'',
//             description: '',
//         };
//     }
// });

// textArea.addEventListener('change', (event) => {
//     response[event.target.name] = event.target.value;
//     console.log(response)
// });

// select.addEventListener('change', (event) => {
//     response[event.target.name] = event.target.value;
//     console.log(response)
// });

// formList.forEach((input) => {
//     input.addEventListener('change', ( event ) => {
//         response[event.target.name] = event.target.value;
//         console.log(response)
//     });
// });



// const printItem = (persona) => {
//     const main = document.querySelector('#list-main');
//     const first = document.createElement('div');
//     first.textContent = persona.firstName ;
//     main.appendChild(first);
// };

// // printItem({firstName: 'freddy'})



// const postItem = async() => {
//     const response = await fetch('https://test-b4e2f-default-rtdb.firebaseio.com/ivan.json', {
//         method: 'POST',
//         headers: {"Content-type": "application/json;"},
//         body: JSON.stringify({
//             prueba: 'esto es una prueba'
//         })
//     });
//     const data = await response.json();
//     return data;
// };


// postItem().then((resolve) => {
//     console.log(resolve)
// }).catch((error) => {
//     console.log(error)

// })