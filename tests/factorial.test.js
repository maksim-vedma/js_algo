import {describe, expect, it} from "vitest";
import {factorial} from "../src/numbers/factorial";


describe("Factorielles", () => {
    it('Calcule de la factorielle du nombre donné', () => {
        expect(factorial(3)).toBe(6);
        expect(factorial(5)).toBe(120);
        expect(factorial(10)).toBe(3628800);
        expect(factorial(15)).toBe(1307674368000);
    });
});
