// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que
// o segundo será o número de vezes que haverá repetição. Um array será retornado.

function repetir(elementoARepetir, numDeVezes) {
    const newArray = [];

    for (let i = 0; i < numDeVezes; i++) {
        newArray.push(elementoARepetir)
    }

    return console.log(newArray)
}

repetir('código', 2);
repetir(7, 3);