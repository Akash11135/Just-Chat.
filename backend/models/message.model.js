import mongoose, { Schema } from "mongoose";
import User from "./user.model.js";
const messageSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      require: true,
    },
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      require: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      require: true,
    },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);
export default Message;
