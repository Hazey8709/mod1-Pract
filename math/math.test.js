const basicOperations = require("./math");
//const {advancedOperations} = require("./math");

describe("Testing Basic Math", () => {
    test("Addition 2 num", () => {
        const results = basicOperations.add(10, 10);

        expect(results).toBe(20);
    });

    test("sub 2 num", () => {
        const results = basicOperations.sub(50, 10);
        expect(results).toBe(40);
    });

    test("multi 2 num", () => {
        const results = basicOperations.multi(10, 10);
        expect(results).toBe(100);
    });

    test("divide 2 num", () => {
        const results = basicOperations.divide(100, 10);
        expect(results).toBe(10);
    });
});

describe("Testing Advance Math", () => {
    test("SQRT of num", () => {
        expect().toBe("");
    });

    test("MAX of 2 num", () => {
        expect().toBe("");
    });
});
