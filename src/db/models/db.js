import mongoose from "mongoose";
import { MONGODB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${MONGODB_NAME}`,
    );
    console.log(`Mongodb connected : ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MONGODB connection error: ", error);
    process.exit(1);
  }
};

export default connectDB;
