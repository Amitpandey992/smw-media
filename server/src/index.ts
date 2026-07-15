import express, { type Request, type Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import portfolioRoutes from "@/routes/portfolioRoutes.js";
import inquiryRoutes from "@/routes/inquiryRoutes.js";
import authRoutes from '@/routes/authRoutes.js';
import { connectDB } from '@/config/db.js';

dotenv.config();

const app = express();
const PORT = process.env['PORT'] || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Health Check API
app.get('/api/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', message: 'Server is healthy' });
});

app.use('/api/portfolio', portfolioRoutes);
app.use('/api/inquiries', inquiryRoutes);
app.use('/api/auth', authRoutes);

// Start Server
const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
