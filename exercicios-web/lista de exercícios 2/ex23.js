// Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.

function contarPalavras(frase) {
    const array = frase.split(' ');

    return console.log(array.length);
}

contarPalavras('Sou uma frase');
contarPalavras('Me divirto aprendendo a programar');