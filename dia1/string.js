// 1) Desenvolva um script que armazene duas variáveis: nome e idade. Após armazenar essas variáveis o script deverá mostrar a mensagem Nome de usuário {nome}. Idade {idade}.. Você deve armazenar a Nome de usuário {nome}. e Idade {idade}. em duas variáveis diferentes e juntá-las somente na hora de exibir.

const nome = 'Gabriel';
const idade = 24;

const mensagemNome = 'Nome de usuário {nome}.';
const mensagemIdade = 'Idade {idade}.';

const mensagemNomeFormatada = mensagemNome.replace('{nome}', nome);
const mensagemIdadeFormatada = mensagemIdade.replace('{idade}', idade);

const mensagemFinal = mensagemNomeFormatada + ' ' + mensagemIdadeFormatada;

console.log(mensagemFinal);

// 2) Desenvolva um script que separe a string O Rato roeu a roupa do rei de Roma pelos seus espaços vazios.

const texto = 'O Rato roeu a roupa do rei de Roma';
const textoSeparado = texto.split(' ');

console.log(textoSeparado);

// 3) Complete o script abaixo. Ele deve exibir true somente se a categoria da mensagem for success, em casos de warning ou error deve exibir false:

const mensagem1 = '[success] Cadastro concluído com sucesso';
const mensagem2 = '[warning] Cadastro concluído com sucesso, mas alguns dados estão inconsistentes';
const mensagem3 = '[error] Erro ao inserir cadastro';

const tipoDaMensagem = '[success]';

console.log(mensagem1.startsWith(tipoDaMensagem)); // deve exibir true quando verificando mensagem1
console.log(mensagem2.startsWith(tipoDaMensagem)); // deve exibir false quando verificando mensagem2
console.log(mensagem3.startsWith(tipoDaMensagem)); // deve exibir false quando verificando mensagem3