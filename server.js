const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const expbs = require("express-handlebars");
const nodemailer = require("nodemailer");
const path = require("path");

app.use(express.static("public"));

app.engine(
  "handlebars",
  expbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routing home
app.get("/", (req, res) => {
  res.render("index", { title: "Home Page" });
});

app.post("/", (req, res) => {
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>

    <ul>
      <li><strong>Name:</strong> ${req.body.name}</li>
      <li><strong>Email:</strong> ${req.body.email}</li>
      <li><strong>Subject:</strong> ${req.body.subject}</li>
    </ul>
    <h3>Message</h3>
  <p>${req.body.message}</p>
  `;

  ("use strict");
  const nodemailer = require("nodemailer");

  async function main() {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "adriana.reinger69@ethereal.email", // generated ethereal user
        pass: "asJJETsV3MzngNuEvg" // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Nodemailer Contact 👻" <adriana.reinger69@ethereal.email>', // sender address
      to: "dasperfect@hotmail.com", // list of receivers
      subject: "Node mailer Contact Form ✔", // Subject line
      text: "Hello world?", // plain text body
      html: output // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    res.render("", { msg: "Your Message Has Been Send" });
  }
  main().catch(console.error);
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
