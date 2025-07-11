/**
 * Doit retourner le résultat de l'addition de a et b
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
export function addition(a, b) {
    return a + b;
}

/**
 * Doit retourner le résultat de la soustraction de a et b
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
export function soustraction(a, b) {
    return a - b;
}

/**
 * Doit retourner le résultat de la multiplication de a et b
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
export function multiplication(a, b) {
    return a * b;
}

/**
 * Doit retourner le résultat de la division entre a et b
 *
 * ATTENTION: En cas de division par zéro, on retourne NaN pour signaler
 * l'erreur.
 *
 * @param {number} a
 * @param {number} b
 * @return {number | NaN}
 */
export function division(a, b) {
    if (b === 0) {
        return NaN;
    }
    return a / b;
}


/**
 * Doit retourner un nombre au carré
 * Exemple : 5 => 25
 *
 * @param a {number}
 * @return {number}
 */
export function auCarre(a) {
    return a * a;
}

/**
 * Dit si le nombre a est pair ou impair.
 * Si le nombre est pair, la fonction doit retourner true,
 * sinon, elle doit retourner false
 *
 * @param a {number}
 * @return {boolean}
 */
export function estPair(a) {
    return a % 2 === 0;
}

/**
 * A partir d'un prix HT unitaire d'un produit
 * ainsi que de sa quantity, on veut connaitre le prix
 * total TTC arrondi à 2 chiffres après la virgule.
 * (On part du principe que la TVA est de 20%)
 *
 * @param priceHT {number}
 * @param quantity {number}
 * @return {number}
 */
export function getPriceTTC(priceHT, quantity) {
    return priceHT * 1.2 * quantity;
}

/**
 * Prend un prix et une hausse/baisse (+20%, -20%...)
 * Retourne le nouveau prix après modification
 *
 * Exemple :
 * Si le prix initial est de 10 euros, et l'augmentation de 20%
 *
 * let newPrice = getNewPrice(10, 20);
 * newPrice --> 12euros
 *
 * @param price {number}
 * @param modif {number}
 * @return {number}
 */
export function getNewPrice(price, modif) {
    return price * (1 + (modif / 100));
}

/**
 * Retourne l'état d'un volume d'eau selon sa température.
 * Positif : liquide
 * Négatif : solide
 * Au dela de 70° : gazeux
 *
 * @param temperature {number}
 * @return string
 */
export function getWaterState(temperature) {
    if (temperature > 70) {
        return "gazeux";
    } else if (temperature > 0) {
        return "liquide";
    }

    return "solide";
}

/**
 * Doit afficher, ligne par ligne, une table de multiplication
 *  Par exemple, si je donne 5 en multiplier et 3 en max:
 *  5x1 = 5
 *  5x2 = 10
 *  5x3 = 15
 *
 * @param multiplier {number}
 * @param max {number}
 * @return void
 */
export function displayMultiplyTable(multiplier, max) {
    for (let i = 0; i <= max; i++) {
        console.log(`${i} x ${multiplier} = ${multiplier * i}`);
    }
}
