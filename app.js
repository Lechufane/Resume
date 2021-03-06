const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));

app.listen(process.env.PORT || port, () => {
    console.log("servidor funcionando");
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve(path.join("./views/index.html")));
});