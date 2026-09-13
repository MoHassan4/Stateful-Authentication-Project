const { registerUser, loginUser } = require("../services/user.service");

const signUp = async (req, res) => {
  try {
    const { userName, password } = req.body;

    const user = await registerUser(userName, password);

    res.status(201).json({
      success: true,
      message: "Signup Successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error.Please try again later",
    });
  }
};

const signIn = async (req, res) => {
  try {
    const { userName, password } = req.body;

    const user = await loginUser(userName, password);

    req.session.userId = user._id;

    res.status(200).json({
      success: true,
      message: "User sign in Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error.Please try again later",
    });
  }
};
module.exports = { signUp, signIn };
