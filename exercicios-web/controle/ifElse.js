// const imprimirResultado = function(nota) {
//     if(nota >= 7) {
//         console.log('Aprovado');
//     } else {
//         console.log('Reprovado');
//     }
// }

const imprimirResultado = nota => nota >= 7 ? console.log('Aprovado') : console.log('Reprovado');

imprimirResultado(10);
imprimirResultado(4);
imprimirResultado('Epa!');