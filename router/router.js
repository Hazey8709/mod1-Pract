const express = require("express");
const router = express.Router();

//! GET
//* localhost:4000/exercise/
router.get("/", (req, res) => {
    res.status(200).json({
        message: "successful - get",
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
    console.log("GET");
});

//! GET By ID#
//* localhost:4000/exercise/:id
router.get("/:id", (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: "successful - Post by ID",
        id: id,
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
    console.log("GET By ID#");
});

//!  POST By ID#
//*  localhost:4000/exercise/:id/:name/
router.post("/:id/:name/", (req, res, next) => {
    const id = req.params.id;
    const name = req.params.name;
    res.status(200).json({
        message: "successful - get by ID",
        id: id,
        name: name,
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
    console.log("POST By ID#");
});

//!  PUT By ID#   ((Not working as expected))
//*  localhost:4000/exercise/:id/:name/
router.put("/:id/", (req, res, next) => {
    const id = req.params.id;
    const name = req.params.name;
    res.status(200).json({
        message: "successful - get by ID",
        id: id,
        name: name,
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
    console.log("PUT By ID#");
});

module.exports = router;
