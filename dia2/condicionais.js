// Escreva um script que exibe uma mensagem customizada dependendo do status de um pedido. Seguindo o exemplo:

const MENSAGEM = 'Qualquer texto';
const STATUS = 'success';

const CORES = {
    RED: '#ff0000',
    YELLOW: '#fff000',
    GREEN: '#00FF00'
};

const SUCCESS = 'success';
const WARNING = 'warning';
const ERROR = 'error';

let color;
if (STATUS === SUCCESS) {
    color = CORES.GREEN;
} else if (STATUS === WARNING) {
    color = CORES.YELLOW;
} else if (STATUS === ERROR) {
    color = CORES.RED;
}

console.log('%c' + MENSAGEM, 'background: ' + color);

// switch/case. 

const MENSAGEM = 'Qualquer texto';
const STATUS = 'success';

const CORES = {
    RED: '#ff0000',
    YELLOW: '#fff000',
    GREEN: '#00FF00'
};

const SUCCESS = 'success';
const WARNING = 'warning';
const ERROR = 'error';

let color;

switch (STATUS) {
    case SUCCESS:
        color = CORES.GREEN;
        break;
    case WARNING:
        color = CORES.YELLOW;
        break;
    case ERROR:
        color = CORES.RED;
        break;
}

console.log('%c' + MENSAGEM, 'background: ' + color);

// 3) Utilizando somente if/else, escreva um programa que, à partir de uma string como [success] qualquer texto, tem o seguinte comportamento:

// Imprime no console tudo certo e o status for success ou warning;
// Imprime errow no console, caso seja error;
// Imprime status inválido caso não seja nenhum dos status acima.

const string = '[success] qualquer texto';

if (string.startsWith('[success]') || string.startsWith('[warning]')) {
    console.log('tudo certo');
} else if (string.startsWith('[error]')) {
    console.log('errow')
} else {
    console.log('status invalido')
}