const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to get req");
});
app.post("/", (req, res) => {
    res.send("Welcome to post req");
});
app.put("/", (req, res) => {
    res.send("Welcome to put req");
});
app.delete("/", (req, res) => {
    res.send("Welcome to delete req");
});
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
}); ``