"use strict";

/**
 * Fonction de chiffrage César
 * Transforme une chaine de caractère
 * en appliquant un décalage sur chaque lettre.
 *
 * Exemple avec un décalage de 1 :
 * "bonjour" -> "cpokpvs"
 *
 * Mode Facile :
 * - ignore les majuscules
 * - une fonction pour chiffrer, une autre pour déchiffrer
 * - le décalage est toujours le même
 *
 * @param {string} string
 * @param {number} key
 * @return {string}
 */
export function caesarCypher(string, key) {
    // On passe trop message en minuscule pour se simplifier la vie
    string = string.toLowerCase();
    let cypher = "";
    for (let i = 0; i < string.length; i++) {
        const charCode = string[i].charCodeAt();
        if (charCode < 97 || charCode > 122) {
            // Si la lettre n'est pas comprise entre a-z
            // on assume que c'est un espace (ou un caractère spécial que l'on ignore)
            cypher += " ";
        } else {
            let nextChar = charCode + key;
            // Si l'on déborde de l'alphabet, on "boucle" en revenant au début
            // Exemple : "Z + 1 ? -> on revient à "A"
            // 26 = nombre de lettres dans l'alphabet
            if (nextChar > 122) nextChar -= 26;
            cypher += String.fromCharCode(nextChar);
        }
    }

    return cypher;
}

/**
 * Version déchiffrage
 *
 * @param {string} cypher
 * @param {number} key
 * @return {string}
 */
export function caesarDecypher(cypher, key) {
    let decypher = "";
    for (let i = 0; i < cypher.length; i++) {
        const charCode = cypher[i].charCodeAt();
        if (charCode < 97 || charCode > 122) {
            decypher += " ";
        } else {
            let nextChar = charCode - key;
            if (nextChar < 97) nextChar += 26;
            decypher += String.fromCharCode(nextChar);
        }
    }

    return decypher;
}

/**
 * Fonction de chiffrage/déchiffrage César 2-en-1.
 * Plus poussée que la correction précédente.
 *
 * @param {string} string Message à (dé)chiffrer
 * @param {number} key Clé permettant de (dé)chiffrer le message
 * @param {boolean} isDecypherMode (default "false")
 * @returns {string} Le message (dé)chiffré
 */
export function caesarCypherTwoInOne(string, key, decypherMode = false) {
    //Ces constantes permettent juste de rendre le code plus lisible
    const ALPHABET_LENGTH = 26;
    const A_CHARCODE = 97;
    const Z_CHARCODE = A_CHARCODE + ALPHABET_LENGTH;

    //Idem pour cette fonction, elle permet de donner un nom à la condition que l'on vérifie
    function isInASCIIRange(code) {
        return code >= A_CHARCODE && code <= Z_CHARCODE;
    }

    if (decypherMode) key = ALPHABET_LENGTH - (key % ALPHABET_LENGTH);

    let result = "";
    //Je retire les caractères spéciaux
    string = string.toLowerCase().replace(/[^\w\s]/gi, '');

    for (let i = 0; i < string.length; i++) {
        const charCode = string[i].charCodeAt(0);
        result += (!isInASCIIRange(charCode)) ? ' ' :
            String.fromCharCode((charCode - A_CHARCODE + key) % ALPHABET_LENGTH + A_CHARCODE);
    }

    return result;
}
