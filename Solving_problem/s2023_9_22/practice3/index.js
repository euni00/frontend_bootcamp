const { Router } = require("express");
const asyncHandler = require("../utils/async-handler");
const hashPassword = require("../utils/hash-password");
const sendMail = require("../utils/send-mail");
const generateRandomPassword = require("../utils/generate-random-password");
const { User } = require("../models");

const router = Router();

router.get("/", (req, res) => {
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
  res.cookie("token", null, { maxAge: 0 });
  res.redirect("/");
});

router.get("/reset-password", (req, res, next) => {
  res.render("user/reset-password");
});

router.post(
  "/reset-password",
  asyncHandler(async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("해당 메일로 가입된 사용자가 없습니다.");
    }

    const password = generateRandomPassword();

    // 랜덤 패스워드 생성하기

    await User.updateOne(
      { email },
      {
        // hashPassword 로 업데이트 하기
        // passwordReset
        password: hashPassword(password),
        passwordReset: true,
      }
    );

    // 패스워드 발송하기`
    await sendMail(
      email,
      "비밀번호가 변경되었습니다.",
      `변경된 비밀번호는 ${password} 입니다.`
    );

    res.render("user/reset-password-confirmed");
  })
);

router.get("/change-password", (req, res, next) => {
  res.render("user/change-password");
});

router.post(
  "/change-password",
  asyncHandler(async (req, res) => {
    const { currentPassword, password } = req.body;
    const user = await User.findOne({ shortId: req.user.shortId });

    if (user.password !== hashPassword(currentPassword)) {
      throw new Error("임시 비밀번호가 일치하지 않습니다.");
    }

    await User.updateOne(
      { shortId: user.shortId },
      {
        password: hashPassword(password),
        passwordReset: false,
      }
    );

    res.redirect("/logout");
  })
);

module.exports = router;
