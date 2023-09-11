const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("GET /users");
});

router.post("/", (req, res) => {
  res.send("POST /users");
});

router.put("/", (req, res) => {
  res.send("PUT /users");
});

router.delete("/", (req, res) => {
  res.send("DELETE /users");
});

module.exports = router;
