

// import api from './api.js';
// console.log(api)
// let data = [...api];

const deleteElement = (id) => {
  const newData = data.filter((element) => element.id !== id);
  const main = document.querySelector('.main-wrapper');
  document.body.removeChild(main);
  data = newData;
  createList(newData);
};

const printCharacter = (personaje) => {
  const { name, image, id } = personaje;

  const main = document.querySelector('.main-wrapper');
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

  const section2 = document.createElement('div');
  
  const deleteAction = document.createElement('button');
  deleteAction.classList.add('btn', 'btn-light');
  deleteAction.textContent = 'Eliminar';

  deleteAction.addEventListener('click', (event) => {
    deleteElement(id);
  });

  section2.classList.add('section');
  section2.appendChild(deleteAction);
  contentWrapper.appendChild(section2);

  const h2 = document.createElement('h2');
  h2.textContent = name;
  section1.appendChild(h2);

  main.appendChild(character_Wrapper);
};

const createList = (list) => {
  const newMain = document.createElement('div');
  newMain.classList.add('main-wrapper');
  document.body.appendChild(newMain);

  list.forEach((character) => {
      printCharacter(character)
  });
};


//  let xhttp = new XMLHttpRequest();
//  xhttp.onreadystatechange = function() {
//   console.log(this.readyState)
//   if(this.readyState === 4 ) {
//     const response = xhttp.responseText;
//     const result = JSON.parse(response);
//     createList(result.results);
//   }
//  };

//  xhttp.open("GET",'https://rickandmortyapi.com/api/character' );
//  xhttp.send()


// const response = fetch('https://rickandmortyapi.com/api/character', {
//   method: 'GET',
// });

// response.then((response) => {
//   console.log(JSON.parse(response))
  
// }).catch((error) => {
//   console.log(error)
// })




// const myPromise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('promesa terminada')
//   }, 3000);
// });

// myPromise.then((resolve) => {
//   console.log(resolve);
// });

// console.log(myPromise)



fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

const result = async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  return data;
};








