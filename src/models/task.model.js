const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    userId: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
      maxLength: 50,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = new mongoose.model("Task", taskSchema);
