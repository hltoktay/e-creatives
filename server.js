const express = require("express");
const app = express();
const expbs = require("express-handlebars");
const path = require("path");

app.use(express.static("public"));

app.engine(
  "handlebars",
  expbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routing home
app.get("/", (req, res) => {
  res.render("index", { title: "Home Page" });
});

// Routing Terms
app.get("/terms", (req, res) => {
  res.render("terms", { title: "Terms of Service" });
});

// Routing service
app.get("/privacy", (req, res) => {
  res.render("privacy", { title: "Privacy Policy" });
});

app.listen(8080, () => {
  console.log("Server is running at port ", 8080);
});
