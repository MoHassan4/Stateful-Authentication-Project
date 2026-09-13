const Task = require("../models/task.model");

const createTask = async (userId, title, description) => {
  const newTask = new Task({
    userId,
    title,
    description,
  });

  return await newTask.save();
};

const getTasks = async (userId) => {
  const tasks = await Task.find({ userId }).sort({ createdAt: -1 });

  if (tasks.length === 0) {
    throw Error("No tasks are found");
  }

  return tasks;
};

module.exports = { createTask, getTasks };
