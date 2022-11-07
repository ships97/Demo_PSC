const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8500;

app.get("/", (req, res) => {
    res.send("Hello from Backend API");
});

app.get("/about", (req, res) => {
    res.send("Hello from About page");
});

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});