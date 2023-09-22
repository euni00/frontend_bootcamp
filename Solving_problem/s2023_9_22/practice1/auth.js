const { Router } = require("express");
const passport = require("passport");
const { setUserToken } = require("../utils/jwt");

const router = Router();

// 세션 비활성화
router.post(
  "/",
  passport.authenticate("local", { session: false }),
  (req, res, next) => {
    // 유저 토큰 생성 및 쿠키에 전달하기
    setUserToken(res, req.user);
    res.redirect("/");
  }
);

module.exports = router;
