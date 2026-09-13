const express = require("express");

require("dotenv").config();

const session = require("express-session");

const connectDB = require("./config/db");

const userRoutes = require("./routes/user.routes");

const taskRoutes = require("./routes/task.routes");

const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 600000, // 10Min
    },
  }),
);

app.use(express.json());

app.use("/api/v1/auth/", userRoutes);

app.use("/api/v1/tasks/", taskRoutes);

app.get("/", (req, res) => {
  res.send("API working now");
});

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
