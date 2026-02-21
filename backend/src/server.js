import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import watchlistRoutes from "./routes/watchlistRoutes.js"
import movieRoutes from "./routes/movieRoutes.js";

dotenv.config();

if (!process.env.MONGO_URI){
    throw new Error("MONGO_URI missing")
}

if(!process.env.JWT_SECRET){
    throw new Error("JWT_SECRET missing")
}

// connect to MongoDB
connectDB();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/watchlist", watchlistRoutes);
app.set("etag", false)
app.use("/api/movies", movieRoutes)

// test route
app.get("/", (req, res) => {
    res.send("Backend running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
