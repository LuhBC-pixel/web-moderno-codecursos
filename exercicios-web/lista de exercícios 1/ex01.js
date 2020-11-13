// Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores.

function calculo(op1, op2) {
    console.log(`Soma: ${op1 + op2}, Subtração: ${op1 - op2}, Multiplicação: ${op1*op2}, Divisão: ${(op1/op2).toFixed(2)}`);
}

calculo(5, 3);