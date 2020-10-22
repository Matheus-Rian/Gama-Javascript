// 1) Em teoria, o que são callbacks? 

//São funções executadas em um momento futuro, geralmente ligadas à código assíncrono.

// 2) Como adaptar a função abaixo para receber um callback que será executado com o resultado da operação ao invés de fazer um alert?

const computacaoMuitoCustosa = (callback) => {
    const superCalculo = 1 + 2;
    callback(superCalculo);
}

computacaoMuitoCustosa(resultado => alert('resultado', resultado));