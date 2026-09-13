const mongoose = require("mongoose");

const connectDB = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URI).then(() => {
      console.log("DB connected successfully");
    });
  } catch (error) {
    console.error("Error in connecting DB");
    process.exit(1);
  }
};

module.exports = connectDB;
