// Dado o seguinte objeto:

const pessoa = {
    nome: 'Gabriel',
    gatos: [
        'Lora',
        'Logan',
        'LeBeau',
        'Qual será o próximo?'
    ]
};

// 1) Exiba suas chaves;

console.log(Object.keys(pessoa));

// 2) Troque a string Qual será o próximo pra Chega, já tá bom né;

pessoa.gatos[pessoa.gatos.length - 1] = 'Chega, já tá bom né';

console.log(pessoa);
// 3) Remova a string Chega, já tá bom né e deixa somente os valores restantes no array.

pessoa.gatos.pop();
console.log(pessoa);