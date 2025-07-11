/**
 * Met un texte en majuscules.
 *
 * @param {string} string
 * @return {string}
 */
export function uppercase(string) {
    return string.toUpperCase();
}


/**
 * Retourne la première lettre d'un texte.
 * Exemple: "Chats et chiens" -> "C"
 *
 * @param {string} string
 * @returns {string}
 */
export function firstLetter(string) {
    return string[0];
}

/**
 * Retourne le premier mot d'un texte.
 * Exemple: "Chats et chiens" -> "Chats"
 *
 * @param {string} string
 * @return {string}
 */
export function firstWord(string) {
    return string.split(" ")[0];
}

/**
 * Prend un texte en entrée et remplace toutes les occurences
 * de la lettre "a" par "XXX".
 *
 * Exemple: "Ca va !" -> "CXXX vXXX"
 *
 * @param {string} string
 * @return {string}
 */
export function pasDeA(string) {
    return string.replace(/a/gi, "XXX");
}
