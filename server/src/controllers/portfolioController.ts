import type { Request, Response } from 'express';
import { Portfolio } from '@/models/Portfolio.js';
import { uploadToCloudinary } from '@/utils/cloudinary.js';

export const getPortfolioItems = async (req: Request, res: Response): Promise<void> => {
  try {
    const isFeatured = req.query['featured'] === 'true';
    const query = isFeatured ? { featured: true } : {};
    
    const items = await Portfolio.find(query).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: items });
  } catch (error) {
    console.error('Error fetching portfolio:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

export const createPortfolioItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, category, description, featured } = req.body;

    if (!req.file) {
      res.status(400).json({ success: false, message: 'Image file is required' });
      return;
    }

    const imageUrl = await uploadToCloudinary(req.file.buffer, 'smw-portfolio');

    const newItem = await Portfolio.create({
      title,
      category,
      description,
      featured: featured === 'true' || featured === true,
      imageUrl,
    });

    res.status(201).json({ success: true, data: newItem, message: 'Portfolio item created successfully' });
  } catch (error) {
    console.error('Error creating portfolio item:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

export const deletePortfolioItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const item = await Portfolio.findById(id);

    if (!item) {
      res.status(404).json({ success: false, message: 'Portfolio item not found' });
      return;
    }

    await Portfolio.findByIdAndDelete(id);

    res.status(200).json({ success: true, message: 'Portfolio item deleted successfully' });
  } catch (error) {
    console.error('Error deleting portfolio item:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};
