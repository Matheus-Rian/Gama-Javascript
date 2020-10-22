// 1) Ajuste o código abaixo para utilizar ternário:

let status = 'success';

let message = '';

if (status === 'success') {
    message = 'Usuário criado com sucesso';
} else if (status === 'warning') {
    message = 'Usuário cadastrado, mas tivemos algum problema';
} else if (status === 'error') {
    message = 'Ocorreu um erro ao cadastrar';
}

console.log(message);
let status = 'success';

const message = status === 'success'
    ? 'Usuário criado com sucesso'
    : status === 'warning'
        ? 'Usuário cadastrado, mas tivemos algum problema'
        : 'Ocorreu um erro ao cadastrar'

// const message = status === 'success'
//     ? 'Usuário criado com sucesso'
//     : status === 'warning'
//         && 'Usuário cadastrado, mas tivemos algum problema'
//         || 'Ocorreu um erro ao cadastrar'

console.log(message);

// 2) Aproveite o ajuste acima e extraia o ternário para uma função que recebe o status retorna a mensagem. Caso ela não retorne nada, exiba a mensagem Sem status'.

function criaMensagemPorStatus (status) {
    // Nesse caso, o switch fica mais organizado
    // switch (status) {
    //     case 'success':
    //         return 'Usuário criado com sucesso';
    //     case 'warning':
    //         return 'Usuário cadastrado, mas tivemos algum problema';
    //     case 'error':
    //         return 'Usuário cadastrado, mas tivemos algum problema';
    //     default:
    //         return 'Sem status';
    // }
    const message = status === 'success'
        ? 'Usuário criado com sucesso'
        : status === 'warning'
            ? 'Usuário cadastrado, mas tivemos algum problema'
            : status === 'error' ? 'Ocorreu um erro ao cadastrar' : undefined;

    return message || 'Sem status';
}

console.log(criaMensagemPorStatus('outro status qualquer'));