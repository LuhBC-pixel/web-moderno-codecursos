// Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
// crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
// quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.

function calculaAltura(altura1, altura2, taxa1, taxa2) {
    if (altura1 == altura2) {
        if (taxa1 > taxa2) {
            return console.log('A criança 1 ultrapassará a criança 2 em um ano.');
        } else if (taxa2 > taxa1) {
            return console.log('A criança 2 ultrapassará a criança 1 em um ano.');
        } else {
            return console.log('As crianças tem igual em altura e crescimento.');
        }
    } else {
        if (altura1 > altura2) {
            if (taxa1 >= taxa2) {
                return console.log('A criança menor não ultrapassará a criança maior.');
            } else {
                return calculaTempo(altura2, taxa2, altura1, taxa1);
            }
        } else {
            if (taxa2 >= taxa1) {
                return console.log('A criança menor não ultrapassará a criança maior.');
            } else {
                return calculaTempo(altura1, taxa1, altura2, taxa2);
            }
        }
    }
}

function calculaTempo(alturaMenor, taxaDoMenor, alturaMaior, taxaDoMaior) {
    let tempo = 0;

    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaDoMenor;
        alturaMaior += taxaDoMaior;
        tempo++;
    }

    console.log(tempo);
    return tempo;
}

calculaAltura(150, 130, 2, 4);