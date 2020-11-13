// Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

function jurosSimples(capital, taxa, tempo) {
    return console.log(capital + (capital * taxa * tempo));
}

function jurosCompostos(capital, taxa, tempo) {
    return console.log(capital * ((1 + taxa)**tempo));
}

jurosSimples(100, 10/100, 2);
jurosCompostos(100, 10/100, 2);