// Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
// dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

function diaDaSemana(dia) {
    switch (dia) {
        case 1: return console.log('Fim de semana');
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return console.log('Dia útil');
        case 7: return console.log('Fim de semana');
        default: return console.log('Dia inválida');
    }
}

diaDaSemana(1)
diaDaSemana(2)
diaDaSemana(3)
diaDaSemana(4)
diaDaSemana(5)
diaDaSemana(6)
diaDaSemana(7)
diaDaSemana('a')