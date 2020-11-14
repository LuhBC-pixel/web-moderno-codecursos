// Crie uma função que receba quatro números como parâmetro (numero, mínimo, máximo, inclusivo) e retorne se o
// parâmetro numero (o primeiro) está entre mínimo e máximo. Quando o parâmetro inclusivo for true, tenha "entre"
// como inclusivo, ou seja, considerando se numero é igual a mínimo ou a máximo. Caso o parâmetro inclusivo não
// seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se numero
// é igual a mínimo ou a máximo.

function estaEntre(min, max, numero, inclusivo = false) {
    if (inclusivo) {
        return numero >= min && numero <= max;
    }
    return numero > min && numero < max;
}

console.log(estaEntre(10, 100, 50));
console.log(estaEntre(16, 100, 160));
console.log(estaEntre(3, 150, 3));
console.log(estaEntre(3, 150, 3, true));