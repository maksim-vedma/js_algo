/**
 * Simule un "pile ou face".
 * 50% de chance de retourner "true"
 * 50% de chance de retourner "false"
 *
 * @returns {boolean}
 */
export function pileFace() {
    return Boolean(Math.floor(Math.random() * 2));
}

/**
 * Fonction de test :
 * Doit lancer X pièces et retourner le
 * nombre de "pile" et le nombre de "face"
 *
 * @param {number} numberOfTries
 * @returns {object}
 */
export function testPileFace(numberOfTries) {
    let pile = 0;
    let face = 0;

    for (let i = 0; i < numberOfTries; i++) {
        if (pileFace()) {
            pile++
        } else {
            face++
        }
        //Bonus, version courte avec une ternaire !
        // pileFace() ? pile++ : face++;
    }

    return {pile, face};
}

