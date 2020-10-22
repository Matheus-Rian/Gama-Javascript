//SPREAD
//é pra distribuir valores em um novo objeto/array

//Como unir os dois objetos abaixo em um novo objeto, usando Spread?
const usuario = {
    email: 'um@email.com.br',
    senha: 'senha-super-secreta'
};

const detalhes = {
    nome: 'Um nome',
    sobrenome: 'Qualquer',
    bio: 'Uma pessoa qualquer',
};

const endereco = {
    logradouro: '1° Travessa Manuel Salvador',
    numeroCasa: '20A'
};

const pessoa = {
    ...usuario,
    ...detalhes,
    ...endereco
};

console.log(pessoa);

//REST
//é para pegar o restante dos valores de um objeto/array.

//Como aplicar REST para receber qualquer quantidade de parâmetro na função?
const funcao = (...args) => {
  args.forEach((arg) => {
    console.log(arg);
  });
};

funcao(1, 2, 3, 4, 5, 6, 7);

const makeIterator = (array) => {
  let nextIndex = 0;

  return {
    next: () => {
      return nextIndex < array.length
        ? { value: array[nextIndex++], done: false }
        : { done: true };
    },
  };
};

let it = makeIterator(["yo", "ya"]);
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done); // true
