import express from "express";
import mongoose from "mongoose";

mongoose
  .connect(process.eventNames.MANGO)
  .then(() => {
    console.log("mongo server is connected");
  })
  .catch(() => {
    console.log("boss there is an error");
  });
const app = express();

app.listen(3000, () => {
  console.log("sir mongodb is running");
});
