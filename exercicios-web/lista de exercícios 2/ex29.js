// Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.

function segundoMaior(array) {
    const maior = Math.max(...array);

    array = array.filter(item => item != maior);

    const segundoMaior = Math.max(...array)

    return console.log(segundoMaior);
}

segundoMaior([12, 16, 1, 5]);
segundoMaior([8, 4, 5, 6]);