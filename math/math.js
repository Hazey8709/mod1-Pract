//!  Add, Subtract, Multiply, divide, SQRT, MAX.

const operations = {
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

    SQRT: function (A) {
        return Math.sqrt(A);
    },

    max: function (A, B) {
        return Math.max(A, B);
    },
};

module.exports = operations;

////! 2nd way
// const advancedOperations = {
//     SQRT: function (A) {
//         return Math.sqrt(A);
//     },

//     Max: function (A, B) {
//          return A - B;
//      },
// };

////! 2nd way
// module.exports = {
//     basicOperations,
//     advancedOperations,
// };
