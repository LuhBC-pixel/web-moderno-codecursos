// Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
// vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de minúsculas.

function contarCaractere(char, string) {
    let numVezesRepetidos = 0;

    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === char) {
            numVezesRepetidos++;
        }
    }

    return console.log(numVezesRepetidos);
}

contarCaractere("r", "A sorte favorece os audazes");
contarCaractere("c", "Conhece-te a ti mesmo");