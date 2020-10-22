// 1) Desenvolva uma função que recebe nome e idade e retorna a mensagem Nome de usuário {nome}. Idade {idade}.

function boasVindas (nome, idade) {
    const mensagem = `Nome de usuário {nome}. Idade {idade}.`;
    return mensagem.replace('{nome}', nome).replace('{idade}', idade);
}

console.log(boasVindas('Gabriel', 24));

// 2) Refaça o exercício número 1 do tópico Arrays utilizando Arrow Functions.

const array = [1, 2, 3, 4, 5];

const arrayNovoComForeach = [];
array.forEach(valor => {
    arrayNovoComForeach.push(valor + 1)
});
console.log(arrayNovoComForeach);

const arrayNovoComMap = array.map(valor => valor + 1);
console.log(arrayNovoComMap);

// 3) O seguinte código irá disparar um erro onClick is not a function. Como você o corrigiria?

function principal(onClick) {
    const argumentos = { 
        mensagem: 'oi'
    };

    if (typeof onClick === 'function') {
        onClick(argumentos)
    }
}

principal(null)