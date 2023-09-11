const { Router } = require("express");
const petsRouter = require("./pets");
const router = Router();

router.get("/", (req, res) => {
  res.send("GET /users");
});

/* /:userId/pets 경로에 petsRouter 연결 */
router.use("/:userId/pets", petsRouter);

module.exports = router;
