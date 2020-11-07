// Desenvolva uma função JavaScript para
// que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).

const arredondaValor = a => console.log(`R$ ${a.toFixed(2).toString().replace('.', ',')}`);

arredondaValor(0.30000000000000004)