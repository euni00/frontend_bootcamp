const nodemailer = require("nodemailer");

// nodemailer 로 gmail transport 생성하기
const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "amy000809@gmail.com",
    pass: "quupqegxoyijtyiz",
  },
});

module.exports = (to, subject, text) =>
  new Promise((resolve, reject) => {
    const message = {
      // userTo 변수에는 이메일을 받는 사람의 이메일 주소를 적어주세요.
      from: "amy000809@gmail.com",
      to,
      subject,
      text,
    };

    transport.sendMail(message, (err, info) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(info);
    });
  });
