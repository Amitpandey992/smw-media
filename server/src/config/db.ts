import mongoose from "mongoose";

// Connect to MongoDB
export const connectDB = async () => {
  try {
    const mongoUri = process.env['MONGO_URI'];
    if (!mongoUri) {
      throw new Error("MONGO_URI is not defined in environment variables");
    }
    await mongoose.connect(mongoUri);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};
