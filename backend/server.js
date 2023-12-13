import express from "express";
import dotenv from "dotenv";
import multer from "multer";
dotenv.config();
import cors from "cors";
import goalRouter from "./router/goalRouter.js";
import userRouter from "./router/userRouter.js";
const { PORT, MONGO_URL } = process.env;

import connectDB from "./config/db.js";
connectDB();
const app = express();

// multer upload
const upload = multer({ dest: "./public/data/uploads/" });

app.post("/stats", upload.single("uploaded_file"), function (req, res) {
  // req.file is the name of your file in the form above, here 'uploaded_file'
  // req.body will hold the text fields, if there were any
  console.log(req.file, req.body);
//   res.send({ file: req.file });
});

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalRouter);
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  req.user = 5;
  res.send("express js start");
  console.log(req.user);
});
app.get("/a", (req, res) => {
  res.send("express js start");
});
app.listen(PORT, () => {
  console.log(`app listen ${PORT}`);
});
