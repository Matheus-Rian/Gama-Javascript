// 1) Organize o código abaixo para manter uma melhor consistência, como preferir:

const nome  = "Gabriel";
let age =    24
var gatos = [
    'Loga',
    "Logan", 'LeBeau']

    for (let i = 0; i < gatos.length; i++   ) {
        console.log(gatos[  i])
    
    
    
    }
    
console.log("Execução finalizada");
console.log('Obrigado por participar');

//Código organizado
const nome = 'Gabriel';
const idade = 24;
const gatos = [
    'Loga',
    'Logan',
    'LeBeau'
];

for (let i = 0; i < gatos.length; i++) {
    console.log(gatos[i]);
}
    
console.log('Execução finalizada');
console.log('Obrigado por participar');

// 2) Como podemos abstrair o seguinte código para aplicar DRY de forma coerente?

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const arr3 = [8, 9, 10, 11];

const novoArr1 = arr1.map(function (valor) {
    return valor + 1;
});

const novoArr2 = arr2.map(function (valor) {
    return valor + 2;
});

const novoArr3 = arr3.map(function (valor) {
    return valor + 3;
});

console.log('Array inicial', arr1);
console.log('Array novo', novoArr1);
console.log('Array inicial', arr2);
console.log('Array novo', novoArr2);
console.log('Array inicial', arr3);
console.log('Array novo', novoArr3);

//Códido Organizado
const somaArray = (array, somatoria) => array.map((valor) => valor + somatoria);

const exibeArrays = (array, novoArray) => {
    console.log('Array inicial', array);
    console.log('Array novo', novoArray);
};

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const arr3 = [8, 9, 10, 11];

const novoArr1 = somaArray(array, 1);
const novoArr2 = somaArray(array, 2);
const novoArr3 = somaArray(array, 3);

exibeArrays(arr1, novoArr1);
exibeArrays(arr2, novoArr2);
exibeArrays(arr3, novoArr3);