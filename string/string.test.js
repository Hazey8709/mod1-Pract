const { uppercase } = require("./string");
const { lowercase } = require("./string");

describe("Testing string Module", () => {
    test("string uppercase input", () => {
        expect(uppercase("bob")).toBe("BOB");
    });

    test("string lowercase input", () => {
        expect(lowercase("FULL-SAIL")).toBe("full-sail");
    });
});
