const { createTask, getTasks } = require("../services/task.service");

const addTask = async (req, res) => {
  try {
    const userId = req.session.userId;
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const task = await createTask(userId, title, description);

    res.status(201).json({
      success: true,
      message: "Task is created successfully",
      data: task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error.Please try again later",
    });
  }
};

const fetchTasks = async (req, res) => {
  try {
    const userId = req.session.userId;

    const tasks = await getTasks(userId);

    res.status(200).json({
      success: true,
      message: "All tasks are fetched successfully",
      data: tasks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error.Please try again later",
    });
  }
};

module.exports = { addTask, fetchTasks };
