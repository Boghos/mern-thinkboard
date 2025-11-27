import express from "express";
import cors from "cors";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "../src/middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// this middleware will parse JSON bodies
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

app.get("/api/notes", (req, res) => {
  res.send("you got 10 notes");
});

//it's better to start your app if the database works correctly
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on port: ", PORT);
  });
});

//
