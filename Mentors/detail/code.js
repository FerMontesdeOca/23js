const url = new URLSearchParams(window.location.search);
const mentorId = url.get('id');
const URL = `https://test-b4e2f-default-rtdb.firebaseio.com/mentors/${mentorId}.json`;


const formMain = document.querySelector('#form-main');
formMain.addEventListener('submit' , (event) => {
    event.preventDefault();

    const inputList = document.querySelectorAll('#form-main input');
    const dataMentor = {};
    inputList.forEach((input) => {
        dataMentor[input.name] = input.value;
    });
    updateMentor(dataMentor);
});

const getMentor = async() => {
    const response = await fetch(URL);
    const result = await response.json();
    console.log(result)
    setValueToInputs(result);
};

const updateMentor = async(data) => {
    try {
        await fetch(URL, {
            method: 'PUT',
            headers: {"Content-type": "application/json;charset=UTF-8"},
            body: JSON.stringify(data),
        });
        alert('Se actualizo')
    } catch (error) {
        alert('No se actualizo')
    }
};

const setValueToInputs = (data) => {
    console.log(data)
    const { name, average, signature } = data;
    document.querySelector('#name').value = name;
    document.querySelector('#average').value = average;
    document.querySelector('#signature').value = signature;
};


getMentor()
