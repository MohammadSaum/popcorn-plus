import express from "express";
import User from "../models/user.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
        return res.status(400).json({
            message: "User already exists"
        });
        }

        res.status(200).json({
        message: "User does not exist, proceed with signup"
        });

    } catch (error) {
        res.status(500).json({
        message: "Server error"
        });
    }
});


export default router;
