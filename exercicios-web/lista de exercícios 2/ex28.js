// Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
// que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que têm a quantidade de dígitos indicada pelo segundo parâmetro.

function filtrarPorQuantidadeDeDigitos(array, digito) {
    const newArray = [];

    for (numero of array) {
        if (String(numero).length == digito){
            newArray.push(numero);
        }
    }

    return console.log(newArray);
}

filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2);
filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1);