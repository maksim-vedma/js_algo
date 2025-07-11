/**
 * Ajoute un élément à la fin d'un tableau
 *
 * Exemple : [1, 2, 3] (nouvelElement = "coucou")
 * Resultat: [1, 2, 3, "coucou"]
 *
 * @param {array} tablo
 * @param {any} nouvelElement
 */
export function ajout(tablo, nouvelElement) {
    tablo.push(nouvelElement);
    return tablo;

    // ou en utilisant la destructuration
    // return [...tablo, nouvelElement];
}

/**
 * Prend un tableau de nombres en argument
 * et retourne un tableau contenant les mêmes valeurs
 * auxquelles ont a ajouté 1
 *
 * Exemple : [1, 2, 3] => [2, 3, 4]
 *
 * @param {number[]} numbers
 * @returns {number[]}
 */
export function plusOne(numbers) {
    return numbers.map(n => n + 1);
}


/**
 * Calcule la moyenne d'un tableau de notes
 *
 * @param {number[]} notes
 * @return {number}
 */
export function avg(notes) {
    let sum = 0;

    notes.forEach(num => {
        sum += num;
    });

    return (sum / notes.length);

    // ou bien de façon déclarative
    // return notes.reduce((sum, n) => sum + n, 0) / notes.length;
}

/**
 * Calcule la moyenne de chaque élève d'une classe
 * Pour chaque élève doit afficher :
 *
 * "[NOM-DE-L-ELEVE] a une moyenne de [XX]"
 * Ajoutez un retour à la ligne entre chaque phrase
 *
 * La classe est un objet au format suivant:
 * {
 *     chloe: [1, 2, 3, 4],
 *     vincent: [1, 2, 3, 4],
 *     ...etc
 * }
 *
 * @param {Record<string, number[]>} classe
 * @return {string}
 */
export function avgGroup(classe) {
    let details = "";
    Object.keys(classe).forEach((student) => {
        details += student + " a eu la moyenne de " + avg(classe[student]) + "\n";
    });

    return details;
}

/**
 * Supprime les doublons dans un tableau
 *
 * @param {array} arr
 * @returns {array}
 */
export function deleteDuplicate(arr) {
    const sansDoublons = [];
    arr.forEach(el => {
        if (!sansDoublons.includes(el)) {
            sansDoublons.push(el);
        }
    });

    return sansDoublons;

    // ou avec un Set !
    // return [...new Set(arr)];
}

/**
 * Trouve le plus grand nombre parmis une liste.
 * @param {number[]} numbers
 * @return {number | null}
 */
export function biggest(numbers) {
    let bigOne = null;
    for (let n of numbers) {
        if (bigOne == null || bigOne < n) {
            bigOne = n;
        }
    }
    return bigOne;

    // Ou bien...
    //return Math.max(...numbers);
}
