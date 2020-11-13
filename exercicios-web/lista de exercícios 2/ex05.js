// Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

function maiorOuIgual(n1, n2) {
    if (typeof n1 !== typeof n2) return console.log(false);
    
    return console.log(n1 >= n2);
}

maiorOuIgual(0, 0);
maiorOuIgual(0, '0');
maiorOuIgual(5, 1);