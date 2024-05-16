import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt; //need cookie parser
    if (!token) {
      return res.status(400).json({ message: "Unauthorized - No token" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(400).json({ message: "Unauthorized - Invalid token" });
    }

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(400).json({ message: "no user found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("authentication error.");
    res.status(500).json({ error: "Internal server error" });
  }
};

export default protectRoute;
