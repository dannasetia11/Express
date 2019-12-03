const express = require("express");
const router = express.Router();

const {
  getAll,
  getById,
  deleteAll,
  deleteOne,
  addOne,
  getUpdate,
  getlogin
} = require("./controller");

router.get("/", getAll);
router.get("/:id", getById);
router.delete("/", deleteAll);
router.delete("/:id", deleteOne);
router.post("/", addOne);
router.post("/login", getlogin);
router.put("/:id", getUpdate);

module.exports = router;
