// O cardápio de uma lanchonete é o seguinte:
// Código | Descrição do Produto | Preço
// 100 Cachorro Quente R$ 3,00
// 200 Hambúrguer Simples R$ 4,00
// 300 Cheeseburguer R$ 5,50
// 400 Bauru R$ 7,50
// 500 Refrigerante R$ 3,50
// 600 Suco R$ 2,80
// Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
// a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
// comando switch. Crie um caso default para produto não existente.

function conta(codigo, quantidade) {
    switch (codigo) {
        case 100: return console.log(3 * quantidade);
        case 200: return console.log(4 * quantidade);
        case 300: return console.log(5.5 * quantidade);
        case 400: return console.log(7.5 * quantidade);
        case 500: return console.log(3.5 * quantidade);
        case 600: return console.log(2.8 * quantidade);
        default: return console.log('Produto não existe.');
    }
}

conta(100, 2);
conta(200, 2);
conta(300, 2);
conta(400, 2);
conta(500, 2);
conta(600, 2);
conta(700, 2);