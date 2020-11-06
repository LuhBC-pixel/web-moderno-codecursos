console.log(soma(3, 4)); // posso colocar em qualquer lugar se for uma função declarada

// function declaration
function soma(x, y) {
    return x + y;
}

// function expression
const sub = function (x, y) {
    return x - y;
};

console.log(sub(3, 4)); // só posso chamar a função depois de criar a função expression

// named function expression
const mult = function mult(x, y) {
    return x * y;
}

console.log(mult(3, 4)); // como é expression, mesma coisa, só depois de criar a função