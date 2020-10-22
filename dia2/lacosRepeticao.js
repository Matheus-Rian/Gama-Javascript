// 1) Escreva um script que lista todos os dados do array ['Lora', 'Logan', 'LeBeau'].

// Utilizando while;
const gatos =['Lora', 'Logan', 'LeBeau'];

let contaGato = 0;

while (contaGato < gatos.length) {
    console.log(gatos[contaGato]);
    contaGato = contaGato + 1;
    // contaGato += 1;
    // contaGato++;
}

// Utilizando for.
const gatos = ['Lora', 'Logan', 'LeBeau'];

for (let contaGato = 0; contaGato < gatos.length; contaGato++) {
    console.log(gatos[contaGato]);
}

// 2) Escreva um script que perturbe o usuário e fique mostrando o alerta com a mensagem Clique em ok! até que o usuário clique em ok. Você deverá usar do/while e o comando confirm, que abrirá no navegador um alerta para o usuário confirmar.

// while(!confirm('Clique em ok!')) {}
// ou
// do {} while(!confirm('Clique em ok!'))