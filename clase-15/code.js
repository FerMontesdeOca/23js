// // import api from './api.js';

// // console.log(api)

// // // const ul = document.createElement('ul');
// // // ul.classList.add('list-group');
// // // ul.id = 'test'
// // // document.body.appendChild(ul);

// // // const imagen = document.createElement('img');
// // // imagen.src = 'http:/asdasdas';
// // // imagen.alt = 'este es alt'
// // // document.body.appendChild(imagen);



// // // const getAverageByMentor = (mentorList) => {
 
// // //   const coverageList = mentorList.map( (item, index) => {
// // //     const total = item.scores.reduce((accum, item ) => {
// // //       accum += item.score
// // //       return accum
// // //     }, 0 );
// // //     const promedio = total / item.scores.length;

// // //     const mentor = {
// // //       nombre: item.name,
// // //       promedio,
// // //       id: index
// // //     };
// // //     printMentor(mentor);
// // //     return mentor
// // //   } );

// // //   return coverageList;
// // // };


// // const printMentor = (mentor) => {
// //   // const name = document.createElement('div');
// //   // const coverage = document.createElement('div');
// //   // name.textContent = mentor.nombre;
// //   // coverage.textContent = `Promedio: ${mentor.promedio}`;
// //   // document.body.appendChild(name);
// //   // document.body.appendChild(coverage);
// //   const li = document.createElement('li');
// //   li.id = mentor.id;
// //   const span = document.createElement('span');
// //   // span.classList.add('badge', 'bg-primary', 'rounded-pill');
// //   span.classList.add('badge', 'bg-primary', 'rounded-pill');
// //   span.textContent = Math.trunc(mentor.promedio);
// //   li.classList.add("list-group-item", 'd-flex', 'justify-content-between', 'align-items-center');
// //   li.textContent = mentor.nombre;
// //   li.appendChild(span);
// //   ul.appendChild(li);
// // };

// // // getAverageByMentor(mentorsArray)


// // // const div = document.createElement('div');
// // // const h2 = document.createElement('h2');

// // // const element = document.createElement('h1');

// // // element.textContent = 'asdas';


// // // div.appendChild(element)
// // // div.appendChild(h2);
// // // document.body.appendChild(div);
// // const referencia = document.querySelector('h1');
// // console.log(referencia)
// // const h2 = document.createElement('h2');
// // h2.textContent = 'Aqui';
// // document.body.insertBefore(h2, referencia);


// const form = document.querySelector('form');
// const inputs = document.querySelectorAll('form inputs');

// console.log(inputs)


// // inputs.forEach( (input) => {
// //   input.addEventListener('keyup',(e) => {
// //     console.log(e.target.value)
// //   })
// // });

// // form.addEventListener('submit',(e) => {
// //   e.preventDefault()
// //   console.log(e.target)
// // })
// const button = document.querySelector("#open").addEventListener('click', () => {
//   const element = document.querySelector("#sidebar");
//   console.log(element)
//   element.classList.add('open');});

//   const close = document.querySelector("#close").addEventListener('click', () => {
//     const element = document.querySelector("#sidebar");
//     console.log(element)
//     element.classList.remove('open');});


// const open = () => {
//   e.preventDefault()

//   const element = document.querySelector("#sidebar");
//   console.log(element)
//   element.classList.add('open');
// }

// const rango = document.querySelector('#rango');

// rango.addEventListener('mouseup', (e) => {
//   console.log(e.target.value)
// })


// const select = document.querySelector('#color');

// select.addEventListener('change', (e) => {
//   console.log(e.target.value)
//   console.log(e)
// })

// const date = document.querySelector('#date');

// date.addEventListener('change', (e) => {
//   console.log(e.target.value)
// })

import api from './api.js';

const main = document.querySelector('.main-wrapper');

const printCharacter = (personaje) => {
  const { name, image } = personaje;

  const character_Wrapper = document.createElement('div');
  character_Wrapper.classList.add('character_Wrapper');

  const character_ImgWrapper = document.createElement('div');
  character_ImgWrapper.classList.add('character_ImgWrapper');
  character_Wrapper.appendChild(character_ImgWrapper);

  const imgCharacter = document.createElement('img');
  imgCharacter.src = image;
  character_ImgWrapper.appendChild(imgCharacter);

  const contentWrapper = document.createElement('div');
  contentWrapper.classList.add('contentWrapper');
  character_Wrapper.appendChild(contentWrapper);

  const section1 = document.createElement('div');
  section1.classList.add('section');
  contentWrapper.appendChild(section1);

  const h2 = document.createElement('h2');
  h2.textContent = name;
  section1.appendChild(h2);

  main.appendChild(character_Wrapper)
};

const test = {
  img: "https://rickandmortyapi.com/api/character/avatar/21.jpeg",
  name: "Aqua Morty"
};


const createList = (list) => {
  list.forEach((character) => {
    console.log(character)
      printCharacter(character)
  });
};

// createList(api);


// const button = document.querySelector('#test');

// button.addEventListener('mouseover', () => {
//   // createList(api)
//   console.log('evento de mouseover')
// });
// button.addEventListener('mouseout', () => {
//   // createList(api)
//   console.log('evento de mouseout')
// });

// document.querySelector('#input-test').addEventListener('keydown', () => {
//   // createList(api)
//   console.log('evento de keydown')
// });

// document.querySelector('#input-test').addEventListener('keyup', () => {
//   // createList(api)
//   console.log('evento de keydown')
// });

const button = document.querySelector('#open');
const sidebar = document.querySelector('#sidebar');
const close = document.querySelector('#close');

button.addEventListener('click', () => {
  sidebar.classList.remove('close')
  sidebar.classList.add('open');
});

close.addEventListener('click', () => {
  sidebar.classList.remove('open')
  sidebar.classList.add('close');
});

const input = document.querySelector('#input-test');

input.addEventListener('change', (event) => {
  console.log(event.target.value)
  console.log(event.target)
});


// const inputsList = document.querySelectorAll('#main-input input')
// console.log(inputsList)
// inputsList.forEach(( element ) => {
//   element.addEventListener('change', (event) => {
//     console.log(event.target.name)
//     console.log(event.target.value)
//     console.log(event.target.id)
//   });
// });

// const body = document.querySelector('body');

// body.addEventListener('scroll', (event) => {
//   console.log(event.target)
// })

// const number = document.querySelector('#number');
// number.addEventListener('change', (event) => {
//   console.log(event.target.value)
// }) 

// const rango = document.querySelector('#rango');
// rango.addEventListener('change', (event) => {
//   console.log(event.target.value)
// }) 

// const select = document.querySelector('#select');
// select.addEventListener('change', (event) => {
//   console.log(event.target.value)
// }) 



const radio = document.querySelectorAll('.form-check input');
radio.forEach((element) => {
  element.addEventListener('change', (event) => {
    console.log(event.target.name)
    console.log(event.target.value)
  });
})

const date = document.querySelector('#date');
date.addEventListener('change', (event) => {
  console.log(event.target.name)
  console.log(event.target.value)
});

// crear un formulario el cual tenga
// first name text
// last name text
// birthdate date
// gender radio button
// country select
// lenguajes de ´programacion checkbox  4 opciones
// description text area

// Agregar un botton que al darle click 
// - validar que ningun campo este vacio
// mostar la informacion camptura en un objeto en la consola

// {
//   firstName: 'asdasdasd',
//   birthdate: 112-09-02
// }

// -plus validar que ningun campo este vacio
