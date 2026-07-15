import type { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Admin } from "@/models/Admin.js";

const generateToken = (id: string, role: string) => {
  return jwt.sign(
    { id, role },
    (process.env['JWT_SECRET'] as string) || "your_jwt_secret_here",
    {
      expiresIn: ((process.env['JWT_EXPIRE'] as string) ||
        "1d") as jwt.SignOptions["expiresIn"],
    },
  );
};

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password, role = "admin" } = req.body;

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      res.status(400).json({ success: false, message: "Email already in use" });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);

    const admin = await Admin.create({
      name,
      email,
      password: password_hash,
      role: role,
    });

    const token = generateToken(admin._id.toString(), admin.role);

    res.status(201).json({
      success: true,
      message: "Admin registered successfully",
      data: {
        token,
        admin: {
          id: admin._id,
          name: admin.name,
          email: admin.email,
          role: admin.role,
        },
      },
    });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res
        .status(400)
        .json({ success: false, message: "Please provide email and password" });
      return;
    }

    const admin = await Admin.findOne({ email });

    if (!admin) {
      res.status(401).json({ success: false, message: "Invalid credentials" });
      return;
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      res.status(401).json({ success: false, message: "Invalid credentials" });
      return;
    }

    if (!admin.is_active) {
      res
        .status(403)
        .json({ success: false, message: "Account is deactivated." });
      return;
    }

    const token = generateToken(admin._id.toString(), admin.role);

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        token,
        admin: {
          id: admin._id,
          name: admin.name,
          email: admin.email,
          role: admin.role,
        },
      },
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getMe = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.admin) {
      res.status(404).json({ success: false, message: "Admin not found" });
      return;
    }

    res.status(200).json({
      success: true,
      data: {
        id: req.admin._id,
        name: req.admin.name,
        email: req.admin.email,
        role: req.admin.role,
        is_active: req.admin.is_active,
      },
    });
  } catch (error) {
    console.error("GetMe Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
