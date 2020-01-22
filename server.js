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

// Routing about
// app.get("/about", (req, res) => {
//   res.render("about", { title: "About Company" });
// });

// Routing service
// app.get("/service", (req, res) => {
//   res.render("service", { title: "What we offer" });
// });

app.listen(8080, () => {
  console.log("Server is running at port ", 8080);
});
