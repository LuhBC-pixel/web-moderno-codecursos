// Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será
// gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número
// sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se
// não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.

function funcaoDaSorte(numero) {
    const min = 1;
    const max = 10;
    const numSorteado = Math.floor(Math.random() * (max - min + 1) + min);
    if (numero == numSorteado) {
        return console.log('Parabéns! O número sorteado foi o', numSorteado)
    } else {
        return console.log('Que pena! O número sorteado foi o', numSorteado)
    }
}

funcaoDaSorte(10);
funcaoDaSorte(5);
funcaoDaSorte(5);