const express = require("express");
const router = require("../router/router");
const myRouter = require("../router/myRouter");
const app = express();

//! middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//! CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Header",
        "Origin, X-requested-with, Content-Type, Accept, Authorization"
    );

    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    }
    next();
});

//! Service up
//* localhost:4000/
app.get("/", (req, res) => {
    res.status(200).json({ message: "service is up" });
    console.log("service Is Up!");
});

//!   Routers
//* Exercise-Router
app.use("/exercise", router);

// //* MyRouter
app.use("/profile", myRouter);

//! Error Handling
app.use((req, res, next) => {
    const error = new Error("not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
            method: req.method,
        },
    });
});

module.exports = app;
