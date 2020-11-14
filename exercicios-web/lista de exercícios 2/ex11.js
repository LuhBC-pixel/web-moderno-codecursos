// Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array:

function receberPrimeiroEUltimoElemento(array) {
    const newArray = [array[0], array[array.length - 1]];

    return console.log(newArray);
}

receberPrimeiroEUltimoElemento([7, 14, 'olá']);
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]);