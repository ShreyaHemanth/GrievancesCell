var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var dotenv = require("dotenv");
var bodyParser = require("body-parser");
var cors = require("cors");
dotenv.config();

var mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/grievances", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(
    () => {
      console.log("connected");
    },
    err => {
      console.log("err", err);
    }
  );
var usersRouter = require("./routes/users");

var complaintsRouter = require("./routes/complaints");

var app = express();

app.use(logger("dev"));
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", usersRouter);
app.use("/complaints", complaintsRouter);

module.exports = app;
