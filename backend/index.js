const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const profileRoutes = require("./routes/profileRoutes");

app.use(express.json());
app.use(cors());

const mongoUrl = process.env.MONGODB_URL;
mongoose.connect(mongoUrl).then(() => {
  console.log("Connected to database");
}).catch((e) => {
  console.log(e);
});

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/profile", profileRoutes);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.resolve(__dirname, "../frontend/dist")));
//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"))
//   );
// }

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server Started`);
});
