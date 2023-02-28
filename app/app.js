const express = require("express");
const router = require("../router/router");
const app = express();

//! middleware
app.use(express.json());

//! localhost:4000/
app.get("/", (req, res) => {
    res.status(200).json({ message: "service is up" });
});

//! Exercise-Router
app.use("/exercise", router);

//! Error Handling
app.use((req, res, next) => {
    const error = new Error("not found");
    error.status = 404;
    next(error);
});

//! Error Handling
app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
        },
    });
});

module.exports = app;
