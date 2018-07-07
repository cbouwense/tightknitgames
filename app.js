const express = require("express");
const app = express();

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

const configRoutes = require("./routes");

const static = express.static(__dirname + "/public");
app.use("/public", static);

configRoutes(app);

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log("Your routes will be running on http://localhost:3000");
});