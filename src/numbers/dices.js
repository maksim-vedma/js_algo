/**
 * Simule un lancé de dès.
 * Doit retourner au hasard un nombre compris entre
 * 1 et 6 inclus.
 *
 * @returns {number}
 */
export function dice6() {
    return Math.floor(Math.random() * 6 + 1);
}
 /** * Simule un lancé de dès. * Doit pouvoir choisir la taille de notre dés. * Par exemple, si on joue à Donjon et Dragon, * nous avons besoin de dés de 20 (donne un résultat
 * compris entre 1 et 20)
 *
 * @param {number} faces
 * @returns {number}
 */
export function diceN(faces) {
     return Math.floor(Math.random() * faces + 1);
}

/**
 * Simule X lancés de dés de N faces.
 * Par exemple, si je lance la fonction avec
 * dices(6, 20)
 * Je veux lancer 6 dés à 20 faces.
 *
 * Les résultats devront être retournés sous forme de tableau.
 *
 * @param {number} nb
 * @param {number} faces
 * @return {number[]}
 */
export function dices(nb, faces) {
    const resultats = [];

    for (let i = 0; i < nb; i++) {
        resultats.push(diceN(faces));
    }

    return resultats;
}

/**
 * Simule X lancés de dés de N faces.
 * Par exemple, si je lance la fonction avec
 * dices(6, 20)
 * Je veux lancer 6 dés à 20 faces.
 *
 * Les résultats devront être retournés sous forme de tableau.
 *
 * @param {number} nb
 * @param {number} faces
 * @return {number[]}
 */
export function dicesAlt(nb, faces) {
    return [...Array(nb).keys()].map(() => diceN(faces));
}
