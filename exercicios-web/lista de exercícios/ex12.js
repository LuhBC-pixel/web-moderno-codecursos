// Faça um algoritmo que calcule o fatorial de um número.

function fatorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * fatorial(n-1);
    }
}

console.log(fatorial(1));
console.log(fatorial(2));
console.log(fatorial(3));
console.log(fatorial(4));
console.log(fatorial(5));