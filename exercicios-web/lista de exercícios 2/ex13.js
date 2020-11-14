// Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
// array recebido como parâmetro.

function filtrarNumeros(array) {
    return console.log(array.filter(item => typeof item == 'number'));
}

filtrarNumeros(['JavaScript', 1, '3', 'web', 20]);
filtrarNumeros(['a', 'c']);