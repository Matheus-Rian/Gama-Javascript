console.log('Matheus')
let nome = 'Gabriel'
console.log(nome)

// 1) Dado o array [1, 2, 3, 4, 5, 6], escreva um programa que retorna um novo array, contendo somente os valores pares, nesse caso, deverá retornar [2, 4, 6]. Dica: operador de módulo % pode ajudar nessa tarefa.

const array = [1, 2, 3, 4, 5, 6]
const arrayPar = array.filter(function(valor){
    return valor % 2 === 0
})
console.log(arrayPar)

// 2) Escreva um script que exibe uma mensagem customizada dependendo do status de um pedido. Seguindo o exemplo:

const MENSAGEM = 'sucesso';

const CORES = {
    RED: '#ff0000',
    YELLOW: '#fff000',
    GREEN: '#00FF00'
};

const status1 = 'success';
const status2 = 'warning';
const status3 = 'error';

if(MENSAGEM === status1) {
    console.log(`%c Sucesso`, `background: ${CORES.GREEN}` )
} else if (MENSAGEM === status2) {
    console.log(`%c Warning`, `background: ${CORES.YELLOW}` )
} else {
    console.log(`%c Error`, `background: ${CORES.RED}`)
}

// 3) Utilizando somente if/else, escreva um programa que, à partir de uma string como [success] qualquer texto, tem o seguinte comportamento:

// Imprime no console tudo certo e o status for success ou warning;
// Imprime errow no console, caso seja error;
// Imprime status inválido caso não seja nenhum dos status acima.

const status = '[sucesso]'
if(status.startsWith('[sucesso]') || status.startsWith('[warning]')) {
    console.log('Tudo certo' )
} else if (status.startsWith('[error]')) {
    console.log('errow')
} else {
    console.log('status inválido')
}

// 1) Escreva um script que lista todos os dados do array ['Lora', 'Logan', 'LeBeau'].

// Utilizando while;
// Utilizando for.

const arrayCats = ['Lora', 'Logan', 'LeBeau']
for (let index = 0; index < arrayCats.length; index++) {
    console.log(arrayCats[index]); 
}

let contador = 0;
while (contador < arrayCats.length) {
    console.log(arrayCats[contador]);
    contador++;
}

// Escreva um script que perturbe o usuário e fique mostrando o alerta com a mensagem Clique em ok! até que o usuário clique em ok. Você deverá usar do/while e o comando confirm, que abrirá no navegador um alerta para o usuário confirmar.


// Funções
// 1) Desenvolva uma função que recebe nome e idade e retorna a mensagem Nome de usuário {nome}. Idade {idade}.

function nomeIdade (nome, idade) {
    return `Nome de usuário ${nome}, idade ${idade}`
}
console.log(nomeIdade('Matheus', 17))

// const array = [1, 2, 3, 4, 5];
// let 
// let arraySoma = array.forEach((valor) => {
//     valor++
// })
// console.log(arraySoma)

console.log(typeof null)

// 3) O seguinte código irá disparar um erro onClick is not a function. Como você o corrigiria?

// function principal(onClick) {
//     const argumentos = { 
//         mensagem: 'oi'
//     };

//     onClick(argumentos)
// }

// principal(null)

// 1) Crie uma função construtora que recebe nome e gatos como parâmetro e cria o objeto com a estrutura acima.

function PessoaGatos (nome, gatos){
    this.nome = nome;
    this.gatos = gatos

    this.exibeGatos = function (){
        this.gatos.forEach(gato => {
            console.log(gato)
        })
    }
};

const pessoa = new PessoaGatos ('Gabriel', [
    'Lora',
    'Logan',
    'LeBeau'
]);
 

pessoa.exibeGatos() // deverá imprimir no console 'Lora', 'Logan' e 'LeBeau'

// 2) Crie uma classe que recebe nome e gatos como parâmetro e cria o objeto com a estrutura acima.

class Pessoa {
    constructor(nome, gatos){
        this.nome = nome;
        this.gatos = gatos
    }

    exibeGatos(){
        this.gatos.forEach(gato => {
            console.log(gato)
        })
    }
}

let pessoa1 = new Pessoa('Gabriel', ['Lora', 'Logan', 'LeBeau'])
console.log(pessoa1)
pessoa.exibeGatos()