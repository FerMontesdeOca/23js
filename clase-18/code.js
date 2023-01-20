const response = {};

// fetch('https://test-b4e2f-default-rtdb.firebaseio.com/.json')
//   .then((response) => response.json())
//   .then((json) => console.log(json));




// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


// async-await

// call stack

const parseInfo = (info) => {
  const list = Object.entries(info);
  const newList = list.map((element) => {
    const infoParsed = {
      id: element[0],
      ...element[1]
    };
    return infoParsed;
  });
  return newList;
};

const get = async() => {
  const response = await fetch('https://test-b4e2f-default-rtdb.firebaseio.com/.json');
  const result = await response.json();
  const data = parseInfo(result);
  console.log(data)
};

const post = async(persona) => {
  try {
    const response = await fetch('https://test-b4e2f-default-rtdb.firebaseio.com/ivan.json', {
      method: 'POST',
      headers: {"Content-type": "application/json;charset=UTF-8"},
      body: JSON.stringify(persona),
    });

    console.log(response)
    const result = await response.json();
    if(result){
      console.log(result.tests)
    }
  } catch(error) {
    console.log(error)
    alert(error)
  }
};
post({ test:'jajaj'})

const put = async(id) => {
  try {
    const response = await fetch(`https://test-b4e2f-default-rtdb.firebaseio.com/${id}.json`,{
      method: 'PUT',
      headers: {"Content-type": "application/json;charset=UTF-8"},
      body: JSON.stringify({
        lastName: 'Jaime',
        userName: 'el duende'
      }),
    });
    const result = await response.json();
    console.log(result)
  } catch (error) {
    console.log(error)
  }
};

// put('-NMC-G4i66lPdpjP3gKD');

// myFuncion();
get();



