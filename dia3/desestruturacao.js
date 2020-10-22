// 1) Atualize as funções de validação abaixo para utilizar desestruturação nos seus parâmetros de input:

// const validaQuantidade = (input, minimo = 6) => {
//     const ehValido = input.value.trim().length >= minimo;

//     if (!ehValido) {
//         return 'O campo '+ input.name + ' deve conter no mínimo ' + minimo  + ' caracteres';
//     }
// }

// const validaEmail = (input) => {
//     const regexp = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
//     const ehValido = regexp.test(input.value);

//     if (!ehValido) {
//         return 'O campo ' + input.name + ' não é válido';
//     }
// }

const validaQuantidade = ({ value, name }, minimo = 6) => {
    const ehValido = value.trim().length >= minimo;

    if (!ehValido) {
        return `O campo ${name} deve conter no mínimo ${minimo} caracteres`;
    }
}

const validaEmail = ({ value, name }) => {
    const regexp = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    const ehValido = regexp.test(value);

    if (!ehValido) {
        return `O campo ${name} não é válido`;
    }
}

let a = 1;
let b = 2;

[b, a] = [a, b];

console.log(`a = ${a}, b = ${b}`);