console.log("SERVER FILE RUNNING");

const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());

/* HOME */

app.get("/", (req, res) => {

    res.send("HOME WORKING");

});

/* USER API */

app.get("/api/user", (req, res) => {

    fs.readFile("users.json", "utf8", (err, data) => {

        if(err){

            return res.status(500).json({
                success:false,
                message:"Error reading users"
            });

        }

        const users = JSON.parse(data);

        if(users.length === 0){

            return res.json({
                success:false,
                message:"No users found"
            });

        }

        res.json({
            success:true,
            user: users[0]
        });

    });

});

/* SERVER */

app.listen(5000, () => {

    console.log("SERVER STARTED ON PORT 5000");

});