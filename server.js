const express = require("express");
const app = express();
const Port = 8080;

app.get("/test", (req, res) => {
    res.send("hello world");
});

app.listen(Port, () => {
    console.log("port:", Port);
});
