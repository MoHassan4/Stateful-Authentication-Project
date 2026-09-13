const isValidSession = (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({
      success: false,
      message: "Not Authorized",
    });
  }

  next();
};

module.exports = isValidSession;
