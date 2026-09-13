const isValidSession = require("../middlewares/session.middleware");

const {addTask , fetchTasks} = require("../controllers/task.controller");

const router = require("express").Router();

router.post("/add", isValidSession, addTask);

router.get("/", isValidSession, fetchTasks);

module.exports = router;
