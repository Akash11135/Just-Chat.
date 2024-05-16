import mongoose from "mongoose";
import env from "dotenv";
env.config();
export const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("connected to mongoDb");
  } catch (error) {
    console.log("Error in db connection : ", error);
  }
};
