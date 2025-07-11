import {describe, expect, it} from "vitest";
import {moveRobot} from "../src/objects/robot";


describe("Robot: suivis de sa position", () => {
    const TESTS = [
        {
            input: "AA",
            output: {x: 0, y: -2},
        },
        {
            input: "AADDAA",
            output: {x: 0, y: 0},
        },
        {
            input: "GADAG",
            output: {x: -1, y: -1},
        },
        {
            input: "xiisiooAAiodoDsooA",
            output: {x: 1, y: -2},
        },
    ];

    TESTS.forEach(test => {
        it('Le robot arrive à destination:', () => {
            expect(moveRobot(test.input)).toStrictEqual(test.output);
        })
    })
})
