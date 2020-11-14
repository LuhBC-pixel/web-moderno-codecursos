// Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o nome
// de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a propriedade
// especificada no segundo parâmetro.

function removerPropriedade(obj, remove) {
    const novoObj = {...obj};
    delete novoObj[remove];
    return console.log(novoObj);
}

removerPropriedade({a: 1, b: 2}, 'a');
removerPropriedade({id: 20, nome: "caneta", descricao: "Não preenchido"}, "descricao");