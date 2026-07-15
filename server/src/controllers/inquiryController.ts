import type { Request, Response } from "express";
import { Inquiry } from "@/models/Inquiry.js";
import { sendAdminNotification } from "@/utils/mailer.js";

export const createInquiry = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { name, email, service, message } = req.body;

    if (!name || !email || !service || !message) {
      res.status(400).json({ success: false, message: 'All fields are required.' });
      return;
    }

    const newInquiry = await Inquiry.create({
      name,
      email,
      service,
      message,
    });

    // Fire and forget email notification
    sendAdminNotification(name, email, service, message).catch(console.error);

    res.status(201).json({ success: true, data: newInquiry, message: 'Inquiry received successfully.' });
  } catch (error) {
    console.error('Error creating inquiry:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};
