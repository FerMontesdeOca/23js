const element = document.getElementsByName('test');


const elementsByClass = document.getElementsByClassName('testClass')


// for (let index = 0; index < elementsByClass.length; index++) {
//   console.log(elementsByClass[index])
// }

// NodeList se itera con forEach 
// HTMLCollection se itrea con for accediendo por posicion


const elementById = document.getElementById("principal");

// console.log(elementById)


const list = document.querySelectorAll(".testClass")
// console.log(document.querySelector('h1').textContent = 'asdasd');
const newElement = document.createElement('div');

newElement.textContent = 'este es un nodo desde';

document.body.appendChild(newElement)

