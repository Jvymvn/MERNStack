const express = require("express");
const { del } = require("express/lib/application");
const router = express.Router();
const {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

router.route("/").get(getGoal).post(setGoal);
router.route("/:id").delete(deleteGoal).put(updateGoal);

module.exports = router;
