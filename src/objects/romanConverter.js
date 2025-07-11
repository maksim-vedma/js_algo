/**
 * Convertisseur de chiffres romains.
 * On donne un chiffre arabe et la fonction doit
 * nous retourner l'équivalent en chiffres romains.
 *
 * Exemples :
 * 6 -> VI
 * 19 -> XIX
 * 789 -> DCCLXXXIX
 * 1009 -> MIX
 *
 * @param integer {number}
 * @returns {string}
 */
export function romanConverter(integer) {
    const ROMAN_NUMBERS = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    }

    let converted = "";

    Object.entries(ROMAN_NUMBERS).forEach(([key, value], i) => {
        const nbOfTime = Math.floor(integer / value);
        converted += key.repeat(nbOfTime);
        integer -= nbOfTime * value;
    });

    return converted;
}
