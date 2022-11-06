const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8500;

app.get("/", (req, res) => {
    res.send("Hello from Backend API");
});

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});