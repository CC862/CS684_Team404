const flash = require('connect-flash');
const session = require('express-session');
const axios = require("axios");

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var home = require("./routes/home");
var data = require("./routes/404");
var dashboardRouter = require("./routes/dashboard");
var registerRouter = require("./routes/signup");
var logoutRouter = require("./routes/signout");
var loginRouter = require("./routes/signin");
var newsRouter = require("./routes/news");

var app = express();

// set up session middleware and flash middleware
app.use(session({
  secret: 'mySecretKey',
  resave: false,
  saveUninitialized: true,
  login: false,
  cookie: { secure: false }
}));
app.use(flash());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", home);
app.use("/data", data);
app.use("/dashboard", dashboardRouter);
app.use("/signup", registerRouter);
app.use("/signout", logoutRouter);
app.use("/signin", loginRouter);
app.use("/news", newsRouter);

//var listener = app.listen(8080, function () {
//  console.log("Listening on port " + listener.address().port);
//});

//console.log statement in a setTimeout function with a delay of 0 to ensure it runs asynchronously
//console.log statement in a setTimeout function with a delay of 0 to ensure it runs asynchronously
var server = app.listen(8080, function () {
  setTimeout(function () {
    console.log("Listening on port " + server.address().port);
  }, 0);
});

module.exports = { app, server };
