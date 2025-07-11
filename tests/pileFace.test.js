import {describe, expect, it} from "vitest"
import {pileFace} from '../src/misc/pileFace';


describe("Pile ou Face: Doit retourner aléatoirement true ou false", () => {
    it('Devrait parfois retourner "true" et parfois "false"', () => {
        // On lance 100 pièces
        const results = Array(50)
            .fill()
            .map(v => pileFace());

        // Besoin de trouver au moins un true et au moins un false
        expect(results).toContain(true)
        expect(results).toContain(false)
    })
})
