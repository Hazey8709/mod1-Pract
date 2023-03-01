const express = require("express");
const myRouter = express.Router();

const profile = require("../profile");

//! GET ALL  (read)
//* http://localhost:4000/profile/
myRouter.get("/", (req, res) => {
    res.send(profile);
    console.log("Get-All Request, Works!");
});

//! GET By ID                    ------NOT-WORKING
//* http://localhost:4000/profile/:userId
myRouter.get("/:userId", (req, res, next) => {
    const userId = req.params.userId;
    const certUser = profile.find((user) => user.id || userId);

    if (!certUser) {
        const error = new Error("This User was Not Found!");
        return next(error);
    }

    res.send(certUser);
    console.log("Get-By-Id Request, Works!");
});

//! POST (add/create)
//* http://localhost:4000/profile/
myRouter.post("/", (req, res) => {
    profile.push(req.body);
    res.send(profile);
});

//! PUT (Update By ID)    ------NOT-WORKING
//* http://localhost:4000/profile/
myRouter.put("/:userId", (req, res) => {
    const userId = req.params.userId;
    const userIndex = profile.findIndex((user) => user.id === userId);
    Object.assign(profile[userIndex], req.body);
    res.send(profile);

    console.log("PUT, Update By ID");
});

//! DELETE By ID
//* http://localhost:4000/profile/
myRouter.delete("/:userId", (req, res) => {
    const userId = req.params.userId;
    const userIndex = profile.findIndex((user) => user.id === userId);
    profile.splice(userIndex, 1);
    res.send(profile);
    console.log("DELETE One By ID Request, Works!");
});

module.exports = myRouter;

// const users = [
//     {
//         id: 1,
//         user: "Admin",
//         name: "Jordan Fortin",
//         userName: "Hazey",
//         password: "sudo",
//         description: "A Admin profile.",
//         loginTime: 315,
//         logoutTime: 645,
//     },
//     {
//         id: 2,
//         user: "User",
//         name: "Jaddix Fortin",
//         userName: "Little Man",
//         password: "fat09",
//         description: "A User Profile.",
//         loginTime: 415,
//         logoutTime: 845,
//     },
//     {
//         id: 3,
//         user: "tester",
//         name: "Dale Rippart",
//         userName: "Ripit",
//         password: "DR44",
//         description: "A Tester Profile.",
//         loginTime: 1215,
//         logoutTime: 345,
//     },
//     {
//         id: 4,
//         user: "Admin",
//         name: "George Blich",
//         userName: "mrBlich",
//         password: "blank$",
//         description: "A User Profile.",
//         loginTime: 815,
//         logoutTime: 845,
//     },
// ];
