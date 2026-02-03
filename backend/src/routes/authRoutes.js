import express from "express";
import User from "../models/user.js";
import bcrypt from "bcryptjs";


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

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        await User.create({
            name,
            email,
            password : hashedPassword
        });

        res.status(201).json({
        message: "User created successfully"
        });

    } catch (error) {
        res.status(500).json({
        message: "Server error"
        });
    }
});


export default router;
