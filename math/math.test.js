const operations = require("./math");
//const advancedOperations = require("./math");

describe("Testing Basic Math", () => {
    test("Addition 2 num", () => {
        const results = operations.add(10, 10);
        expect(results).toBe(20);
    });

    test("sub 2 num", () => {
        const results = operations.sub(50, 10);
        expect(results).toBe(40);
    });

    test("multi 2 num", () => {
        const results = operations.multi(10, 10);
        expect(results).toBe(100);
    });

    test("divide 2 num", () => {
        const results = operations.divide(100, 10);
        expect(results).toBe(10);
    });

    test("SQRT of num", () => {
        const results = operations.SQRT(9);
        expect(results).toBe(3);
    });

    test("MAX of 2 num", () => {
        const results = operations.max(5, 10);
        expect(results).toBe(10);
    });
});

// //! 2nd way
// describe("Testing Advance Math", () => {
//     test("SQRT of num", () => {
//         const results = advancedOperations.SQRT(9);

//         expect(results).toBe(3);
//     });

//     test("MAX of 2 num", () => {
//         expect().toBe();
//     });
// });
