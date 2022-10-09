import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const { MONGO_URI } = process.env;

const connectDB = async () => {
  const connect = await mongoose.connect(MONGO_URI, { useNewUrlParser: true });

  console.log(`MongoDB Connected: ${connect.connection.host}`.bgGreen);
};

export default connectDB;
