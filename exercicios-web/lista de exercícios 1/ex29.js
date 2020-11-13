// Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
// deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
// deles estão fora do intervalo, escrevendo estas informações.

function entreDezEVinte(array) {
    let dentroDoIntervalo = 0;
    let foraDoIntervalo = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 10 && array[i] <= 20) {
            dentroDoIntervalo++;
        } else {
            foraDoIntervalo++;
        }
    }

    return console.log(`Dentro do intervalo: ${dentroDoIntervalo}. Fora do intervalo: ${foraDoIntervalo}.`);
}

let vetor = [7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21];

entreDezEVinte(vetor);