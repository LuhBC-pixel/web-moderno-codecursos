// Desenvolva uma função que receba uma frase como parâmetro e retorne essa string somente com as consoantes, ou seja, sem as vogais

function removerVogais(frase) {
    const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    vogais.forEach(vogal => frase = frase.replace(vogal, ''));
    return console.log(frase)
}

removerVogais('Cod3r');
removerVogais('Fundamentos');