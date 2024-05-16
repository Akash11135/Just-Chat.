import Conversation from "../models/conversation.model.js";
import User from "../models/user.model.js";

const getUsersForSideBar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json({ filteredUsers });
  } catch (error) {
    console.log("error in fetching sidebar users");
    res.status(500).json({ error: "Internal server error" });
  }
};

export default getUsersForSideBar;
