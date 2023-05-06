import mongoose from "mongoose";
import express from "express";
import * as dotenv from "dotenv";
import { router as authRoutes } from "./src/routes/authRoutes.js";
import { router as bookRoutes } from "./src/routes/bookRoutes.js";
import { router as authorRoutes } from "./src/routes/authorRoutes.js";
import { router as userRoutes } from "./src/routes/userRoutes.js";
import { authToken } from "./src/middleware/authMiddleware.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.DB_URL).then(() => console.log("Connected to database..."));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

app.use(authRoutes);
app.use(userRoutes);
app.use(authorRoutes);
app.use(authToken, bookRoutes);
