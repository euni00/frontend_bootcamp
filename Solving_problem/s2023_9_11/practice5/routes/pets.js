const { Router } = require("express");

const router = Router({ mergeParams: true });

/* GET 라우팅 추가 */
router.get("/", (req, res) => {
  const { userId } = req.params;
  res.send(`Pets of user ${userId}`);
});

module.exports = router;
