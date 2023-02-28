const express = require("express");
const router = express.Router();

//! localhost:4000/exercise/
router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "successful - get",
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});

//! localhost:4000/exercise/id
router.get("/:id", (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: "successful - get by ID",
        id: id,
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});

module.exports = router;
