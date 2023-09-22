const { Router } = require("express");
const asyncHandler = require("../utils/async-handler");
const hashPassword = require("../utils/hash-password");
const sendMail = require("../utils/send-mail");
const { User } = require("../models");
const secretMessage = require("../secret-message");

const router = Router();

router.get("/", (req, res) => {
  res.redirect("/send-message");
  return;

  if (req.user) {
    res.redirect("/posts");
    return;
  }

  res.redirect("/login");
});

router.get("/login", (req, res, next) => {
  res.render("user/login");
});

router.get("/join", (req, res, next) => {
  res.render("user/join");
});

router.post(
  "/join",
  asyncHandler(async (req, res) => {
    const { email, name, password } = req.body;
    const hashedPassword = hashPassword(password);
    const user = await User.create({
      email,
      name,
      password: hashedPassword,
    });

    res.redirect("/");
  })
);

router.get("/logout", (req, res, next) => {
  req.logout();
  res.redirect("/");
});

router.get("/send-message", (req, res) => {
  res.render("mail");
});

router.post(
  "/send-message",
  asyncHandler(async (req, res) => {
    const { email } = req.body;
    // SECRET MESSAGE: ELICE IS AWESOME PLATFORM
    await sendMail(email, "You've received a message", secretMessage);
    res.send("메일이 발송되었습니다.");
  })
);

module.exports = router;
