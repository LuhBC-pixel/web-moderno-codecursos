// Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
// inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
// elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
// o valor do elemento for maior que 5.

function vetorMultiplica(vetor, num) {
    let novoVetor = [];

    vetor.forEach(elemento => {novoVetor.push(elemento * num)}) ;

    return novoVetor;
}

function vetorMaior5(vetor, num) {
    let novoVetor = [];

    vetor.forEach(elemento => {elemento > 5 ? novoVetor.push(elemento * num) : null});

    return novoVetor;
}

let vetor = [1, 2, 3, 4, 5, 6]

console.log(vetorMultiplica(vetor, 3));
console.log(vetorMaior5(vetor, 3));