const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/submit", async (req, res) => {

    try {

        const response = await axios.post(
            "http://40.192.24.94:5000/process",
            req.body
        );

        res.json(response.data);

    } catch (err) {

        console.error(err.message);

        res.status(500).json({
            error: "Backend not reachable",
            details: err.message
        });

    }

});

app.listen(3000, () => {
    console.log("Frontend running on port 3000");
});
