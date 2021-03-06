const express = require("express");
const app = express();
const path = require("path");
const mainRoutes = require("./routes/mainRoutes");

const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));

app.set("view engine", "ejs");

app.use("/", mainRoutes);

app.listen(3000, () => {
    console.log("Servidor levantado");
});