"use strict"

/**
 * Prend un texte en parametre et le transforme en CRI
 * Majuscules + "!!!" à la fin.
 * Exemple: "Bonjour ça va ?" --> "BONJOUR ÇA VA ?!!!"
 *
 * @param {string} str La string a traiter
 * @returns string
 */
export function screaming(str) {
    return str.toUpperCase() + "!!!";
}

/**
 * Met la première lettre d'un mot en majuscule.
 *
 * @param {string} string La string a traiter
 * @returns string
 */
export function capitalize(string) {
    return string.replace(
        string[0],
        string[0].toUpperCase(),
    );
}

/**
 * Met la première lettre d'un mot en minuscule.
 *
 * @param {string} string
 * @returns string
 */
export function lowerize(string) {
    return string.replace(
        string[0],
        string[0].toLowerCase(),
    );
}

/**
 * Transforme une chaine de caractère en PascalCase
 * (pas d'espace, premières lettres en majuscule)
 * Exemple : Je suis un exemple -> JeSuisUnExemple
 *
 * @param {string} string
 * @returns string
 */
export function toPascalCase(string) {
    return string
        .toLowerCase()
        .split(' ')
        .map(word => capitalize(word))
        .join('');

    // Ou implement
    // return capitalize(toCamelCase(string));
}

/**
 * Transforme une chaine de caractère en camelCase
 * Exemple : Je suis un exemple -> jeSuisUnExemple
 *
 * @param {string} string
 * @returns string
 */
export function toCamelCase(string) {
    return string
        .toLowerCase()
        .split(' ')
        .map((word, i) => i > 0 ? capitalize(word) : word)
        .join('');

    // Ou simplement
    // return lowerize(toPascalCase(string));
}
