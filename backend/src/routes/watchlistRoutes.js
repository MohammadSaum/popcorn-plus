import express from "express"
import authMiddleware from "../middleware/authMiddleware.js"
import User from "../models/User.js"

const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
    const user = await User.findById(req.user.id);
    res.json(user.watchlist);
});


    router.post("/", authMiddleware, async (req,    res) => {
    const { movieId, title, poster } = req.body;

    if (!movieId) {
        return res.status(400).json({ message: "movieId required" });
    }

    const user = await User.findById(req.user.id);

    const exists = user.watchlist.some(
        (m) => m.movieId === movieId
    );

    if (exists) {
        return res.status(400).json({ message: "Movie already in watchlist" });
    }

    user.watchlist = user.watchlist.filter(item => item.movieId)

    user.watchlist.push({ movieId, title, poster });
    await user.save();

    res.json(user.watchlist);
    });


router.delete("/:movieId", authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user._id);

        user.watchlist = user.watchlist.filter(
        movie => movie.movieId !== req.params.movieId
        );

        await user.save();

        res.json(user.watchlist);
    } catch (error) {
        res.status(500).json({ message: "Failed to remove from watchlist" });
    }
});

export default router;