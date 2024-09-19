import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import perfumeRouter from "./routes/perfume.route.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

try {
  mongoose.connect(process.env.DBNAME, { dbName: "Perfume" });
  console.log("DB Connected");
} catch (error) {
  console.log(error);
}

app.get("/", (req, res) => {
  res.send("Api is working");
});

app.use("/user", userRouter);
app.use("/perfume", perfumeRouter);

app.listen(process.env.PORT, () => console.log("Server is Running"));
