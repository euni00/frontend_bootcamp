const express = require("express");
const userRouter = require("./routes/users.js");
const app = express();

app.get("/", (req, res) => {
  res.send("OK");
});

/* 라우터를 '/users' 경로에 연결 */
app.use("/users", userRouter);

app.listen(8080);
