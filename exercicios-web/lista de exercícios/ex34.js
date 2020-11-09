// Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
// todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.

function comparaString(string1, string2) {
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();

    for (let i = 0; i < string1.length; i++) {
        for (let j = 0; j < string2.length; j++) {
            if (string1[i] == string2[j]) {
                return true;
            } else {
                continue;
            }
        }
    }

    return false;
}

console.log(comparaString('abc','cba'));