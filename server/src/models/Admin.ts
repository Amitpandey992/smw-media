import { Schema, model, Document } from 'mongoose';

export interface IAdmin extends Document {
  email: string;
  password: string;
  name: string;
  role: "admin";
  is_active: boolean;
}

const adminSchema = new Schema<IAdmin>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    role: { 
      type: String, 
      default: "admin" 
    },
    is_active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Admin = model<IAdmin>('Admin', adminSchema);
