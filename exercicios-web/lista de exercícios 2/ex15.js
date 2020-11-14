// Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
// pares e que também tenham índices pares.

function receberSomenteOsParesDeIndicesPares(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0 && i % 2 == 0) {
            newArray.push(array[i]);
        }
    }
    return console.log(newArray);
}

receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]);
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]);