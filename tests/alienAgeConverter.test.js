import {describe, expect, it} from "vitest";
import {marsAgeConverter, alienAgeConverter} from '../src/numbers/alienAge';

describe("Convertisseur d'age mode EASY", () => {
    const TESTS = [
        {
            input: 35,
            output: 18,
        },
        {
            input: 78,
            output: 41,
        },
        {
            input: 18,
            output: 9,
        },
    ];

    TESTS.forEach(test => {
        it('Convertit un age terrien en age martien', () => {
            expect(marsAgeConverter(test.input)).toBe(test.output);
        })
    })
});

describe("Convertisseur d'age mode HARD: on peut préciser une planète", () => {
    const TESTS = [
        {
            input: {
                age: 18,
                planet: "terre",
            },
            output: 18
        },
        {
            input: {
                age: 18,
                planet: "mars",
            },
            output: 9,
        },
        {
            input: {
                age: 36,
                planet: "uranus",
            },
            output: 0,
        },
        {
            input: {
                age: 7,
                planet: "venus",
            },
            output: 11,
        },
    ];

    TESTS.forEach(test => {
        it('Convertit un age terrien selon une planête donnée', () => {
            expect(alienAgeConverter(test.input.age, test.input.planet)).toBe(test.output);
        })
    });

    it("Doit détecter que la planête n'existe pas.", () => {
        expect(alienAgeConverter(22, "plop")).toBe(22);
    });
});

