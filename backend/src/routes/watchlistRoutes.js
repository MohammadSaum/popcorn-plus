import express from "express"
import authMiddleware from "../middleware/authMiddleware.js"
import User from "../models/User.js"

const router = express.Router();

router.get("/",authMiddleware,async(req,res) => {
    try{
        res.json(req.user.watchlist)
    } catch (error) {
        res.status(500).json({message:"Failed to fetch watchlist"})
    }
})

router.post("/",authMiddleware, async (req,res) => {
    try {
        const {movieId, title, poster} = req.body

        const user = await User.findById(req.user._id)

        const alreadyAdded = user.watchlist.some(
            movie => movie.movieId === movieId
        )

        if (alreadyAdded) {
            return res.status(400).json({message: "Movie already in watchlist"})
        }

        user.watchlist.push({ movieId, title, poster})
        await user.save()

        res.status(201).json(user.watchlist)
    } catch (error) {
        res.status(500).json({message:"Failed to add to watchlist"})
    }
})

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