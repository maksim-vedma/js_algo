"use strict";

/**
 * Convertit un âge donné en son équivalent
 * sur une autre planète.
 *
 * [Référence](https://www.exploratorium.edu/explore/solar-system/age)
 *
 * Mode Facile : donne l'âge sur Mars
 *
 * On arrondira les résultats (19.58997 => 19)
 *
 * @param {number} age
 * @return {number}
 */
export function marsAgeConverter(age) {
    const EARTH_ORBIT_PERIOD = 365;
    const MARS_ORBIT_PERIOD = 686.98;
    const ratio = EARTH_ORBIT_PERIOD / MARS_ORBIT_PERIOD;

    return Math.floor(age * ratio);
}

/**
 * Convertit un âge donné en son équivalent
 * sur une autre planète.
 *
 * [Référence](https://www.exploratorium.edu/explore/solar-system/age)
 *
 * Mode Difficile : on peut préciser la
 * planète que l'on veut et afficher  "Cette planète n'existe pas."
 * le cas échéant.
 *
 * @param {number} age
 * @param {string} planet
 * @return {number}
 */
export function alienAgeConverter(age, planet) {
    const ORBIT_PERIODS = {
        mercure: 87.97,
        venus: 224.70,
        earth: 365,
        mars: 686.98,
        jupiter: 4332.82,
        saturn: 10755.70,
        uranus: 30687.15,
        neptune: 60190.03,
    };

    if (!(planet in ORBIT_PERIODS)) {
        console.log("Cette planète n'existe pas"); // sorry Pluton !
        return age;
    }

    return Math.floor(age * ORBIT_PERIODS.earth / ORBIT_PERIODS[planet]);
}
