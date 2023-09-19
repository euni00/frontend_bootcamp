const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const members = require("./Members");

const app = express();

// Handlebars Middleware
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// 1. express 미들웨어를 사용하세요.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage Route
app.get("/", (req, res) =>
  res.render("index", {
    title: "사용자 등록",
    members,
  })
);

// Set static folder 생성 -> 정적으로 라우터에 해당하는 페이지가 작동합니다.
app.use(express.static(path.join(__dirname, "public")));

//2. app.use()를 사용해서 사용자 api (.`/routes/api/members`) 를 라우팅하세요.
const memberRouter = require("./routes/api/members");
app.use("/api/members", memberRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
