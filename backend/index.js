import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("Api is working");
});

app.listen(process.env.PORT, () => console.log("Server is Running"));
