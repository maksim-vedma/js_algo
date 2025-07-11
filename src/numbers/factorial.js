/**
 *  Doit retourner la factorielle du nombre donné
 *  Exemples:
 *
 *  Factorielle de 3 (3!):
 *  1 * 2 * 3 = 6
 *
 *  Factorielle de 5 (5!):
 *  1 * 2 * 3 * 4 * 5 = 120
 *
 *  @param {number} int
 *  @return {number}
 */
export function factorial(int) {
    // Méthode 1 -- For Loop
    // let value = 1;
    // for (let i = 2; i <= int; i++) {
    //     value *= i;
    // }
    // return value;

    // Méthode 2 -- Recursivité
    return int === 0 ? 1 : factorial(int - 1) * int;

    // Méthode 3 -- Déclaratif
    // return Array(int)
    //     .fill()
    //     .map((x, i) => i + 1)
    //     .reduce((acc,i)=> i >= 2 ? acc * i: i)
    //     ;
}

