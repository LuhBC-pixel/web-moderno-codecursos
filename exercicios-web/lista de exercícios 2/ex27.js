// Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme exemplo a seguir:

function inverter(obj) {
    const objInvert = Object.entries(obj).map( parKeyValue => parKeyValue.reverse() );

    return console.log(Object.fromEntries(objInvert));
}

inverter({ a: 1, b: 2, c: 3});