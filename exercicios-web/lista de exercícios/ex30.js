// Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

function maxEMin(vetor) {
    let max = 0;
    let min = 1000;

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > max) {
            max = vetor[i];
        }
        if (vetor[i] < min) {
            min = vetor[i];
        }
    }

    return console.log([max, min]);
}


let vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9];

maxEMin(vetor);