// 1) Faça uma chamada para a API https://jsonplaceholder.typicode.com/users e liste todos os usuários no console:

// Utilizando XHR (dica: utilize a função JSON.parse para converter os dados de um texto para objeto JavaScript);
// Utilizando Fetch.
// const URL = 'https://jsonplaceholder.typicode.com/users';

// Com XHR
const XHR = new XMLHttpRequest();
XHR.onload = function () {
    console.log(this.response);
};
XHR.responseType = 'json'; // ou convertendo com JSON.parse o this.responseText
XHR.open("GET", URL);
XHR.send();

// Com fetch
fetch(URL)
.then(response => response.json())
.then(console.log);