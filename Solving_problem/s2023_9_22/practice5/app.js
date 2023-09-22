const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const dayjs = require("dayjs");
const session = require("express-session");
const passport = require("passport");
const MongoStore = require("connect-mongo");

const loginRequired = require("./middlewares/login-required");
const getUserFromJWT = require("./middlewares/get-user-from-jwt");
const indexRouter = require("./routes");
const postsRouter = require("./routes/posts");
const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");

require("./passport")();

mongoose.connect("mongodb://localhost:27017/simple-board");

mongoose.connection.on("connected", () => {
  console.log("MongoDB Connected");
});

const app = express();

app.locals.formatDate = (date) => {
  return dayjs(date).format("YYYY-MM-DD HH:mm:ss");
};

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(passport.initialize());
app.use(getUserFromJWT);

app.get("/", (req, res) => {
  res.json({ status: "OK" });
});
app.use("/", indexRouter);
app.use("/posts", loginRequired, postsRouter);
app.use("/users", loginRequired, usersRouter);
app.use("/auth", authRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // render the error page
  res.status(err.status || 500);
  res.json({
    error: err.message,
  });
});

module.exports = app;
