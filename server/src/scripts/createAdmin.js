import dotenv from "dotenv";
import { Admin } from "@/models/Admin";
import { connectDB } from "@/config/db.js";

dotenv.config();

async function createAdmin() {
  try {
    await connectDB();

    const adminExists = await Admin.find({});

    if (adminExists.length > 0) {
      console.log("Admin already exists");
      process.exit(0);
    }

    const admin = new Admin({
      name: "Admin",
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
      role: "admin",
    });

    await admin.save();
    console.log("Admin created successfully");
    process.exit(0);
  } catch (error) {
    console.error("Error creating admin:", error);
    process.exit(1);
  }
}

createAdmin();