/**
 * Simple version with Loop
 *
 * Cette fonction doit inverser une chaine de
 * caractères. Exemple :
 * "Coucou" -> "uocuoC"
 *
 * @param {string} string
 * @returns {string}
 */
export function reverseString(string) {
    let reversed = "";
    for (let i= string.length - 1; i >= 0; i--) {
        reversed += string[i];
    }
    return reversed;

    // Ou bien
    // return string.split('').reverse().join('');
}
