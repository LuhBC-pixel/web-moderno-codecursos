// Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
// quantidade especificada no parâmetro.

function simboloMais(numero) {
    let string = '';

    for (let i = 0; i < numero; i++) {
        string += '+'
    }

    return console.log(string);
}

simboloMais(2);
simboloMais(4);