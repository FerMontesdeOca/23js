// import api from './api.js';

// console.log(api)

// // const ul = document.createElement('ul');
// // ul.classList.add('list-group');
// // ul.id = 'test'
// // document.body.appendChild(ul);

// // const imagen = document.createElement('img');
// // imagen.src = 'http:/asdasdas';
// // imagen.alt = 'este es alt'
// // document.body.appendChild(imagen);



// // const getAverageByMentor = (mentorList) => {
 
// //   const coverageList = mentorList.map( (item, index) => {
// //     const total = item.scores.reduce((accum, item ) => {
// //       accum += item.score
// //       return accum
// //     }, 0 );
// //     const promedio = total / item.scores.length;

// //     const mentor = {
// //       nombre: item.name,
// //       promedio,
// //       id: index
// //     };
// //     printMentor(mentor);
// //     return mentor
// //   } );

// //   return coverageList;
// // };


// const printMentor = (mentor) => {
//   // const name = document.createElement('div');
//   // const coverage = document.createElement('div');
//   // name.textContent = mentor.nombre;
//   // coverage.textContent = `Promedio: ${mentor.promedio}`;
//   // document.body.appendChild(name);
//   // document.body.appendChild(coverage);
//   const li = document.createElement('li');
//   li.id = mentor.id;
//   const span = document.createElement('span');
//   // span.classList.add('badge', 'bg-primary', 'rounded-pill');
//   span.classList.add('badge', 'bg-primary', 'rounded-pill');
//   span.textContent = Math.trunc(mentor.promedio);
//   li.classList.add("list-group-item", 'd-flex', 'justify-content-between', 'align-items-center');
//   li.textContent = mentor.nombre;
//   li.appendChild(span);
//   ul.appendChild(li);
// };

// // getAverageByMentor(mentorsArray)


// // const div = document.createElement('div');
// // const h2 = document.createElement('h2');

// // const element = document.createElement('h1');

// // element.textContent = 'asdas';


// // div.appendChild(element)
// // div.appendChild(h2);
// // document.body.appendChild(div);
// const referencia = document.querySelector('h1');
// console.log(referencia)
// const h2 = document.createElement('h2');
// h2.textContent = 'Aqui';
// document.body.insertBefore(h2, referencia);


const form = document.querySelector('form');
const inputs = document.querySelectorAll('form inputs');

console.log(inputs)


// inputs.forEach( (input) => {
//   input.addEventListener('keyup',(e) => {
//     console.log(e.target.value)
//   })
// });

// form.addEventListener('submit',(e) => {
//   e.preventDefault()
//   console.log(e.target)
// })
const button = document.querySelector("#open").addEventListener('click', () => {
  const element = document.querySelector("#sidebar");
  console.log(element)
  element.classList.add('open');});

  const close = document.querySelector("#close").addEventListener('click', () => {
    const element = document.querySelector("#sidebar");
    console.log(element)
    element.classList.remove('open');});


const open = () => {
  e.preventDefault()

  const element = document.querySelector("#sidebar");
  console.log(element)
  element.classList.add('open');
}

const rango = document.querySelector('#rango');

rango.addEventListener('mouseup', (e) => {
  console.log(e.target.value)
})


const select = document.querySelector('#color');

select.addEventListener('change', (e) => {
  console.log(e.target.value)
  console.log(e)
})

const date = document.querySelector('#date');

date.addEventListener('change', (e) => {
  console.log(e.target.value)
})

