// 1) Complete o script abaixo. Ele deve exibir o valor final em Reais, considerando somente 2 casas decimais.

const valor = 123.456;

const prefixo = 'R$';
const numeroFormatado = valor.toFixed(2).replace('.', ',');

const valorEmReais = prefixo + numeroFormatado;

console.log(valorEmReais); // Deverá exibir R$123,45

// 2) Escreva um script que utiliza a string 123.456 e exibe:

// Seu número sem as casas decimais;
// Seu número com as casas decimais.
const numero = '123.456';

const numeroComCasasDecimais = parseFloat(numero); // ou Number
const numeroSemCasasDecimais = parseInt(numero);

console.log(numeroComCasasDecimais);
console.log(numeroSemCasasDecimais);