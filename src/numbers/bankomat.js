"use strict";

/**
 * Distributeur de billet "radin"
 * Il essaye toujours de vous donner le moins de billets possible.
 *
 * Mode facile : la fonction vous dit combien de billets elle rend

 * Mode difficile : la fonction vous donne le détails précis du nombre
 * de billets et de leur valeur.
 * Exemple :
 *  0 billet de 50
 *  4 billets de 20
 *  2 billets de 10
 *  1 billet de 5
 *
 *  @param {number} amount
 */
export function bankomat(amount) {
    const cash = {
        500: 0,
        200: 0,
        100: 0,
        50: 0,
        20: 0,
        10: 0,
        5: 0,
        2: 0,
        1: 0,
    }

    Object.keys(cash).reverse().forEach(billet => {
        cash[billet] = Math.floor(amount / billet);
        amount -= billet * cash[billet];
    });

    return cash;
}
