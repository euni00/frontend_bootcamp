import { User } from "../db"; // from을 폴더(db) 로 설정 시, 디폴트로 index.js 로부터 import함.
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";

class userAuthService {
  static async getUser({ email, password }) {
    // 이메일 db에 존재 여부 확인
    const user = await User.findByEmail({ email });

    if (!user) {
      return "해당 이메일은 가입되지 않은 회원입니다.";
    }

    // 비밀번호 일치 여부 확인
    // DB에 저장되어 있는 유저의 암호화된 비번
    const correctPasswordHash = user.password;
    const isPasswordCorrect = await bcrypt.compare(
      // 유저가 보낸 비번
      password,
      // DB에 저장되어 있는 유저의 암호화된 비번
      correctPasswordHash
    );

    if (!isPasswordCorrect) {
      return "비밀번호가 틀렸습니다.";
    }

    const secretKey = process.env.JWT_SECRET_KEY || "jwt-secret-key";
    // jwt 의 sign 함수를 이용하여 토큰 생성, 이 때 위의 secretKey 사용
    const token = jwt.sign({ user_id: user.id }, secretKey);

    // 반환할 loginuser 객체를 위한 변수 설정
    const id = user.id;
    const name = user.name;
    const description = user.description;

    const loginUser = {
      token,
      id,
      email,
      name,
      description,
      errorMessage: null,
    };

    return loginUser;
  }

  static async getUsers() {
    // 모델 층의 findAll 함수를 통해 유저 목록을 db로부터 추출하고 반환함
    const users = await User.findAll();
    return users;
  }

  static async getUserInfo({ user_id }) {
    // 모델 층의 User의 findById 함수를 사용하여 사용자를 검색
    const user = await User.findById({ user_id });

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!user) {
      const errorMessage =
        "해당 이메일은 가입 내역이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    return user;
  }

  static async addUser({ name, email, password }) {
    // 이메일 중복 확인
    const user = await User.findByEmail({ email });
    if (user) {
      const errorMessage =
        "이 이메일은 현재 사용중입니다. 다른 이메일을 입력해 주세요.";
      return { errorMessage };
    }

    // 비밀번호 해쉬화
    const hashedPassword = await bcrypt.hash(password, 10);

    // id 는 유니크 값 부여
    const id = uuidv4();
    const newUser = { id, name, email, password: hashedPassword };

    // db에 저장
    const createdNewUser = await User.create({ newUser });
    createdNewUser.errorMessage = null; // 문제 없이 db 저장 완료되었으므로 에러가 없음.

    return createdNewUser;
  }
}

export { userAuthService };
