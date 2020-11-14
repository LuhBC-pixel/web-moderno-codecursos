// crie uma função que receba um array com uma quantidade
// indeterminada de números e retorne a média simples desses números.

function calcularMedia(array) {
    const soma = (acumulador, atual) => acumulador + atual;
    const media = array.reduce(soma) / array.length;

    return console.log(media);
}

calcularMedia([0, 10]);
calcularMedia([1, 2, 3, 4, 5]);