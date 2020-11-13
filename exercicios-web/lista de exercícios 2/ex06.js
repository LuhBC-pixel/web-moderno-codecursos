// Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
// numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será -1. Se o parâmetro e entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
// tipo ...".

function inverso(valor) {
    const tipo = typeof valor;

    if (tipo == 'string') {
        return console.log('booleano ou número esperados, mas o parâmetro é do tipo string');
    } else if (tipo == 'boolean') {
        return console.log(!valor);
    } else {
        return console.log(valor * (-1));
    }
}

inverso(true);
inverso('6');
inverso(-2000);
inverso('programação');