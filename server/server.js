import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./config/Mongodb.js";
import authRouter from "./routes/authRoutes.js";

const app = express();
const port = process.env.PORT || 4000;
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));

// Api endPoint
app.get("/", (req, res) => res.send("Api working find"));
app.use("api/auth", authRouter);
app.listen(port, () => console.log(`server start on PORT:${port}`));
