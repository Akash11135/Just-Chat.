import express from "express";
import authRoutes from "./routes/auth.routes.js";
import messagesRoutes from "./routes/messages.routes.js";
import userRoutes from "./routes/users.routes.js";
import { connectToMongoDB } from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
import env from "dotenv";
import cors from "cors";
env.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000", // Update this to your frontend origin
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messagesRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  connectToMongoDB(), console.log(`server up at PORT : ${PORT}`);
});
