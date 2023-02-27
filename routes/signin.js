var express = require("express");
var router = express.Router();
const pool = require("../db/db");
const session = require('express-session');
const flash = require('connect-flash');
const cors = require('cors');
const ejs = require('ejs');


const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,
  optionSuccessStatus:200
}
router.use(cors(corsOptions));

router.use(session({
  secret: 'mysecret',
  resave: false,
  saveUninitialized: false
}));

router.use(flash());

router.get("/", function (req, res) {
  res.render("signin", { message: req.flash('error') });
});

async function userExists(email, password) {
  const result = await pool.query("SELECT * FROM Users WHERE Email = ? AND Password = ?", [email, password]);
  const rows = result && result[0];
  //console.log("con log for rows");
  //console.log(rows);
  return rows && rows.length > 0 ? rows[0] : null;
}

router.post("/", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  //console.log("email and pass con log ");
  //console.log(email, password);
  const user = await userExists(email, password);

  if (user) {
    req.session.email = email;
    req.session.login = true;
    req.session.save()
    req.session.username = user.Username; // set the username to the user's username
    res.redirect("/dashboard?loginSuccess=true");
  } else {
    req.flash("error", "Invalid email or password");
    console.log("invalid signin creds")
    res.redirect("/signin?loginSuccess=false");
  }
});

module.exports = router;