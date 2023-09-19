const { Schema } = require("mongoose");
const shortId = require("./types/short-id");

//2. 게시글 데이터에 대한 모델을 작성합니다.
//게시글 제목, 게시글 내용, 작성자 의 테이블을 생성하세요.
const PostSchema = new Schema({
  shortId,
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  author: {
    type: String,
  },
});

module.exports = PostSchema;
