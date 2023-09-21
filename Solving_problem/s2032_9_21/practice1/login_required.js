import jwt from "jsonwebtoken";

function login_required(req, res, next) {
  // request 헤더로부터 authorization bearer 토큰을 받음.
  const userToken = req.headers["authorization"]?.split(" ")[1] ?? "null";

  // 이 토큰은 jwt 토큰 문자열이거나, 혹은 "null" 문자열임.
  // 토큰이 "null" 일 경우, login_required 가 필요한 서비스 사용을 제한함.
  if (userToken === "null") {
    res.status(400).send("로그인 해주세요.");
    return;
  }

  // 해당 token 이 정상적인 token인지 확인 -> 토큰에 담긴 user_id 정보 추출
  try {
    const secretKey = process.env.JWT_SECRET_KEY || "jwt-secret-key";

    // jwt.verify 함수를 이용하여 정상적인 jwt인지 확인
    const jwtDecoded = jwt.verify(userToken, secretKey);

    // verify 함수로부터 반환된 결과에서 user_id 추출
    const user_id = jwtDecoded.user_id;
    // req 객체에 currentUserId 프로퍼티를 추가하고, 값으로는 user_id를 할당
    req.currentUserId = user_id;
    // next 함수를 호출하여 본래 요청이 갔었던 라우터로 진행
    next();
  } catch (error) {
    res.status(400).send("정상적인 토큰이 아닙니다. 다시 한 번 확인해 주세요.");
    return;
  }
}

export { login_required };
