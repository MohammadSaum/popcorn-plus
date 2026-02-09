import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import watchlistRoutes from "./routes/watchlistRoutes.js"

dotenv.config();

// connect to MongoDB
connectDB();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/watchlist", watchlistRoutes);

// test route
app.get("/", (req, res) => {
    res.send("Backend running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
