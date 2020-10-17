const nome = 'Matheus'
const idade = '17'
console.log(`Usuário: ${nome}; idade: ${idade}`)

console.log('O Rato roeu a roupa do rei de Roma'.split(' '))

const mensagem1 = '[success] Cadastro concluído com sucesso';
const mensagem2 = '[warning] Cadastro concluído com sucesso, mas alguns dados estão inconsistentes';
const mensagem3 = '[error] Erro ao inserir cadastro';

console.log(mensagem1.startsWith("[success]")); // deve exibir true quando verificando mensagem1
console.log(mensagem2.startsWith("[success]")); // deve exibir false quando verificando mensagem2
console.log(mensagem3.startsWith("[success]")); // deve exibir false quando verificando mensagem3

const valor = 123.456;
const reais = 'R$';

const dinheiro = valor.toFixed(2).replace('.', ',');
const valorEmReais = reais + dinheiro;
console.log(valorEmReais);

const numero = '123456'
const numeroComDecimais = parseFloat(numero)
const numeroSemDecimais = parseInt(numero)

let array = [1, 2, 3, 4, 5];
let arrayNovo = [];
array.forEach(function(valor) {
    arrayNovo.push(valor++)
})
console.log(arrayNovo)

const arrayNovoMap = array.map(function(valor){
    return valor++;
})

console.log(arrayNovoMap)
