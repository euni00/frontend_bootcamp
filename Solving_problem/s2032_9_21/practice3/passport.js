const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

// Load User model
const User = require("../models/User");

module.exports = function (passport) {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      //1. passport.use()를 사용해서 로그인 인증을 하는 코드를 작성하세요.
      // 사용자 로그인시 input 이메일이 회원가입되어있지 않을 경우 에러 메시지 ('That email is not registered')를 반환합니다.

      //2. 사용자 로그인시 패스워드가 틀렸을 경우 'Password incorrect'메시지를 반환하세요.
      User.findOne({ email: email }).then((user) => {
        if (!user) {
          return done(null, false, { message: "That email is not registered" });
        }

        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: "Password incorrect" });
          }
        });
      });
    })
  );

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
};
