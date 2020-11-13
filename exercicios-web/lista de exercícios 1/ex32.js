// Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

function mediaAritmetica(vetor) {
    let somaDaMedia = 0;
    let mediaFinal = 0;

    for (let i = 0; i < vetor.length; i++) {
        somaDaMedia += vetor[i];
    }

    return console.log(somaDaMedia / vetor.length);
}

let vetor = [1, 2, 3, 4, 5];

mediaAritmetica(vetor);