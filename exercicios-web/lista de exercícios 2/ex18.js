// Crie uma função que receba um array de produtos e retorne o total das despesas.

function despesasTotais(despesas) {
    const apenasPreco = produto => produto.preco;
    const resultado = despesas.map(apenasPreco).reduce((acumulador, atual) => acumulador + atual);

    return console.log(resultado);
}

despesasTotais([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
    ]);
despesasTotais([
{nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
{nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
]);