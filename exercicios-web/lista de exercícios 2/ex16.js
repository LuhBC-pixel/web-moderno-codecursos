// desenvolva uma função que recebe um número correspondente a um ano e retorna se ele é
// bissexto ou não.

function checarAnoBissexto(ano) {
    const divisívelPor4 = ano % 4 == 0;
    const divisívelPor100 = ano % 100 == 0;
    const divisívelPor400 = ano % 400 == 0;

    return console.log((divisívelPor4 && !divisívelPor100) || divisívelPor400);
}

checarAnoBissexto(2020);
checarAnoBissexto(2100);