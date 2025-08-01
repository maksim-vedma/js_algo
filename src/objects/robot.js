"use strict";

/**
 * Doit permettre de controller un robot en lui indiquant des mouvements à effectuer.
 *
 * A : "Avance"
 * D : "Pivote sur la droite"
 * G : "Pivote sur la gauche"
 *
 * On part du principe que le robot commence à la position {x: 0, y: 0}
 * et qu'il fait fasse au nord (si il avance, il se retrouvera en {x: 0, y: -1})
 *
 * Tout ordre non-valable doit être ignoré.
 *
 * @param {string} orders (exemple: "AADAGA" => Avance, avance, droite, avance, gauche, avance)
 * @returns {{x: number, y: number}} Le position finale du robot après mouvements
 */
export function moveRobot(moves) {
    const pos = {x: 0, y: 0};
    // ...

    return pos;
}

