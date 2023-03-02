//!  Add, Subtract, Multiply, divide, SQRT, MAX.

const basicOperations = {
    add: function (A, B) {
        return A + B;
    },

    sub: function (A, B) {
        return A - B;
    },

    multi: function (A, B) {
        return A * B;
    },

    divide: function (A, B) {
        return A / B;
    },
};

const advancedOperations = {
    SQRT: function (A, B) {
        return A + B;
    },

    Max: function (A, B) {
        return A - B;
    },
};

module.exports = {
    basicOperations,
    advancedOperations,
};
