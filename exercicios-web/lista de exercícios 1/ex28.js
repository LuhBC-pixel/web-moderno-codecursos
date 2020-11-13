// Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

function vetor(vetor) {
    let par = 0;
    let impar = 0;

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 == 0) {
            par++;
        } else {
            impar++;
        }
    }

    return console.log(`Par: ${par}. Ímpar: ${impar}.`)
}

let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

vetor(a);