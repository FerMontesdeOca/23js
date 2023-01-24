const URL_POST = 'https://test-b4e2f-default-rtdb.firebaseio.com/mentors.json';

const transformInfo = (result) => {
    const isArray = Object.entries(result);
    const list = isArray.map((item) => {
        const obj = {
            id: item[0],
            ...item[1],
        };
        return obj;
    });
    return list;
};

const getMentor = async() => {
    try {
        const response = await fetch(URL_POST);
        const result = await response.json();
        const data = transformInfo(result);
        printMentores(data)
    } catch (error) {
        console.log(error)
    }
};

const postMentor = async(mentor) => {
    try {
        await fetch(URL_POST, {
            method: 'POST',
            headers: {"Content-type": "application/json;charset=UTF-8"},
            body: JSON.stringify(mentor) ,
        }); 
        getMentor();
    } catch (error) {
        console.log(error);
    }
};

const printMentores = (data) => {
    cleanList()
    data.forEach((mentor) => {
        const ul = document.querySelector('ul');
        const listMain = document.createElement('li');
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Editar';
        editBtn.addEventListener('click', () => {
            window.location.href = `../detail/index.html?id=${mentor.id}`;
        });
        listMain.textContent =`id:${mentor.id} - ${ mentor.name }`;
        listMain.classList.add('list-group-item');
        listMain.appendChild(editBtn);
        ul.appendChild(listMain);
    });
};


const formMain = document.querySelector('#form-main');
formMain.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputList = document.querySelectorAll('#form-main input');
    const dataMentor = {};
    inputList.forEach((input) => {
        dataMentor[input.name] = input.value;
    });
    postMentor(dataMentor);
});

const cleanList = () => {
    const toRemove = document.querySelectorAll('.list-group li');
    toRemove.forEach((element) => {
        element.remove();
    });
};

// {
//     name: 'ivan',
//     signature,
//     average,
// }

getMentor()