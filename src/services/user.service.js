const User = require("../models/user.model");

const bcrypt = require("bcryptjs");

const registerUser = async (userName, password) => {
  const existingUser = await User.findOne({ userName });

  if (existingUser) {
    throw new Error("User already existed");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    userName,
    password: hashedPassword,
  });

  return newUser.save();
};

const loginUser = async (userName, password) => {
  const findingUser = await User.findOne({ userName });

  if (!findingUser) {
    throw new Error("Invalid credentials");
  }

  const isMatched = await bcrypt.compare(password, findingUser.password);

  if (!isMatched) {
    throw new Error("Invalid credentials");
  }

  return findingUser;
};

module.exports = { registerUser, loginUser };
