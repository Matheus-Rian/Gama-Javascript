// 1) Escreva um programa que, dado o array [1, 2, 3, 4, 5] deverá exibir: [2, 3, 4, 5, 6].

// Utilizando forEach;
// Utilizando map.

const array = [1, 2, 3, 4, 5];

const arrayNovoComForeach = [];
array.forEach(function (valor) {
    arrayNovoComForeach.push(valor + 1)
});
console.log(arrayNovoComForeach);

const arrayNovoComMap = array.map(function (valor) {
    return valor + 1;
});
console.log(arrayNovoComMap);

// 2) Escreva um programa que, dado o array [1, 2, 3, 4, 5] deverá retornar somente o número 3.

const array = [1, 2, 3, 4, 5];

const comFind = array.find(function (valor) {
    console.log(valor);
    return valor == 3;
});
// const comFilter = array.filter(function (valor) {
//     console.log(valor);
//     return valor == 3;
// });

console.log(comFind);
// console.log(comFilter);

// 3) Escreva um programa que, dado o array [1, 2, 3, 4, 5] deverá retornar a soma dos itens desse array, totalizando 15.

// Utilizando forEach;
// Utilizando reduce.
const array = [1, 2, 3, 4, 5];

let somaComForeach = 0;
array.forEach(function (valor) {
    somaComForeach = somaComForeach + valor;
});
console.log(somaComForeach);

const somaComReduce = array.reduce(function (acumulador, atual) {
    return acumulador + atual;
});
console.log(somaComReduce);

// 4) Escreva um programa que inverte uma palavra, ou seja, javascript deverá se tornar tpircsavaj.

const texto = 'javascript';

const textoInvertido = texto.split('').reverse().join('');

console.log(textoInvertido);

// 5) Dado o array [1, 2, 3, 4, 5], escreva um programa que exibe um novo array, contendo o primeiro e o último item

const array = [1, 2, 3, 4, 5];
const novoArray = [
    array[0],
    array[array.length - 1]
];

console.log(novoArray);

//6) Escreva um script que retorna ['success', 'warning', 'error'].

const mensagens = [
    '[success] Cadastro_concluído_com_sucesso',
    '[warning] Cadastro_concluído_com_sucesso,_mas_alguns_dados_estão_inconsistentes',
    '[error] Erro_ao_inserir_cadastro'
];

const mensagensFormatadas = mensagens.map(function (mensagem) {
    const status = mensagem.split(' ')[0];
    const statusFormatado = status.replace('[', '').replace(']', '');
    
    return statusFormatado;
});

console.log(mensagensFormatadas);

// 7) Dado o array ['Lora', 'Logan', 'LeBeau', 'Outro'] escreva um programa que retorna um array com todos os nomes que iniciam com L.

const array = ['Lora', 'Logan', 'LeBeau', 'Outro'];

const arrayFiltrado = array.filter(function (nome) {
    return nome.startsWith('L');
});

console.log(arrayFiltrado);

// 1) Dado o array [1, 2, 3, 4, 5, 6], escreva um programa que retorna um novo array, contendo somente os valores pares, nesse caso, deverá retornar [2, 4, 6]. Dica: operador de módulo % pode ajudar nessa tarefa.

const array = [1, 2, 3, 4, 5, 6];
const pares = array.filter(function (valor) {
    return valor % 2 === 0
});

console.log(pares);