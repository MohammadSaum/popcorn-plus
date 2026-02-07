import jwt from "jsonwebtoken";
import User from "../models/User.js";

const authMiddleware = async (req, res, next) => {
    try {
    // 1️⃣ Get token from header
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "No token provided" });
        }

    // 2️⃣ Extract token
        const token = authHeader.split(" ")[1];

    // 3️⃣ Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 4️⃣ Find user from decoded token
    const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
        return res.status(401).json({ message: "User not found" });
        }

    // 5️⃣ Attach user to request
        req.user = user;

    // 6️⃣ Allow request to continue
        next();

    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

export default authMiddleware;
