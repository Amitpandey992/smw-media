import { Schema, model, Document } from 'mongoose';

export interface IPortfolio extends Document {
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
  featured: boolean;
}

const portfolioSchema = new Schema<IPortfolio>(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    imageUrl: { type: String, required: true },
    description: { type: String },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Portfolio = model<IPortfolio>('Portfolio', portfolioSchema);
