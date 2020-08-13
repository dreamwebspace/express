const express = require("express");
const path = require("path");
const exhbs = require("express-handlebars");
const logger = require("morgan");
//const cookieParser = require("cookie-parser");

const router = require("./routes/index");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "express-handlebars");

app.use(logger("dev"));
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", router);
app.use("/about", router);

const listener = app.listen(3000, function () {
  console.log("Listening on port " + listener.address().port);
});
