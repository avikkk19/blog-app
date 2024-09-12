import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/user.routes.js'

dotenv.config();

const app = express();
app.use(express.json());

// Get MongoDB URI from environment variables
const mongoURI = process.env.MONGODB_URI;

if (!mongoURI) {
  console.error("MongoDB URI is not set in the environment variables.");
  process.exit(1);
}

mongoose
  .connect(mongoURI) 
  .then(() => {
    console.log("MongoDB is connected boss");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
app.use("/api/user",userRoutes)