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
      throw new Error("제목과 내용을 입력 해 주세요");
    }

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

router.post("/:shortId", async (req, res, next) => {
  const { shortId } = req.params;

  const { title, content } = req.body;

  try {
    if (!title || !content) {
      throw new Error("제목과 내용을 입력 해 주세요");
    }

    // shortId 로 게시글 수정
    await Post.updateOne(
      { shortId },
      {
        title,
        content,
      }
    );
    res.redirect(`/posts/${shortId}`);
  } catch (err) {
    next(err);
  }
});

//1. router.delete()를 사용해서 shortId의 게시글을 삭제하세요.
router.delete("/:shortId", async (req, res, next) => {
  const { shortId } = req.params;

  // shortId 로 게시글 삭제
  await Post.deleteOne({ shortId });
  res.send("OK");
});

module.exports = router;
