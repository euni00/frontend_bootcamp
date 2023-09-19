const express = require("express");
const uuid = require("uuid");
const router = express.Router();
const members = require("../../Members");

const idFilter = (req) => (member) => member.id === parseInt(req.params.id);

// Gets All Members
router.get("/", (req, res) => res.json(members));

// Get Single Member
router.get("/:id", (req, res) => {
  const found = members.some(idFilter(req));

  if (found) {
    res.json(members.filter(idFilter(req)));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

// 1. post()를 사용해서 사용자 정보 추가하세요.
router.post("/", (req, res) => {
  // 제대로 요청되어 newMember에 저장되었는지 확인
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active",
  };
  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: "Please include a name and email" });
  }

  //2. push()를 사용해서 Members.js에 newMember를 추가하세요.
  members.push(newMember);

  // 사용자 추가하기 버튼을 클릭하면 전체 사용자 정보를 json 파일 형태로 불러옵니다.
  res.json(members);
  // res.redirect('/');
});

// 사용자 업데이트
router.put("/:id", (req, res) => {
  const found = members.some(idFilter(req));

  if (found) {
    members.forEach((member, i) => {
      if (idFilter(req)(member)) {
        const updMember = { ...member, ...req.body };
        members[i] = updMember;
        res.json({ msg: "Member updated", updMember });
      }
    });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

// 사용자 삭제하기
router.delete("/:id", (req, res) => {
  const found = members.some(idFilter(req));

  if (found) {
    res.json({
      msg: "Member deleted",
      members: members.filter((member) => !idFilter(req)(member)),
    });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

module.exports = router;
