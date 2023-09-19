const { Router } = require("express");
const { Post } = require("../models");

const router = Router();

router.get("/", async (req, res, next) => {
  if (req.query.write) {
    res.render("post/edit");
    return;
  }

  // 게시글 목록
  const posts = await Post.find({});

  res.render("post/list", { posts });
});

router.get("/:shortId", async (req, res, next) => {
  const { shortId } = req.params;
  // shortId 로 게시글 찾기
  const post = await Post.findOne({ shortId });

  if (req.query.edit) {
    res.render("post/edit", { post });
    return;
  }

  res.render("post/view", { post });
});

router.post("/", async (req, res, next) => {
  const { title, content } = req.body;

  try {
    if (!title || !content) {
      throw new Error("제목과 내용을 입력해 주세요");
    }

    // 4. 서버에 POST request를 보내서 브라우저에서 CREATE 작업을 수행하세요.
    // 게시글 생성
    const post = await Post.create({
      title,
      content,
    });
    res.redirect(`/posts/${post.shortId}`);
  } catch (err) {
    next(err);
  }
});

//5. router에 post() 메소드를 추가해서 /:shortID 의 주소의 요청일 때만 게시글 생성 작업을 실행하세요.
router.post("/:shortId", async (req, res, next) => {
  const { shortId } = req.params;
  const { title, content } = req.body;

  try {
    if (!title || !content) {
      throw new Error("제목과 내용을 입력해 주세요");
    }

    await Post.updateOne(
      { shortId },
      {
        title,
        content,
      }
    );
    res.redirect(`/posts/${post.shortId}`);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
