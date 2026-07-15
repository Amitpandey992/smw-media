import { Schema, model, Document } from 'mongoose';

export interface IInquiry extends Document {
  name: string;
  email: string;
  service: string;
  message: string;
  isRead: boolean;
}

const inquirySchema = new Schema<IInquiry>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    service: { type: String, required: true },
    message: { type: String, required: true },
    isRead: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Inquiry = model<IInquiry>('Inquiry', inquirySchema);
