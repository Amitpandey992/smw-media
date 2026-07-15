import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { Admin, type IAdmin } from '@/models/Admin.js';

interface JwtPayload {
  id: string;
  role: string;
}

declare global {
  namespace Express {
    interface Request {
      admin?: IAdmin;
    }
  }
}

export const protect = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    res.status(401).json({ success: false, message: 'Not authorized to access this route' });
    return;
  }

  try {
    const decoded = jwt.verify(token, (process.env['JWT_SECRET'] as string) || 'your_jwt_secret_here') as JwtPayload;
    
    const admin = await Admin.findById(decoded.id);

    if (!admin) {
      res.status(401).json({ success: false, message: 'The user belonging to this token no longer exists' });
      return;
    }

    if (!admin.is_active) {
      res.status(403).json({ success: false, message: 'User account is inactive' });
      return;
    }

    req.admin = admin;
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: 'Not authorized to access this route' });
  }
};

export const authorize = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.admin || !roles.includes(req.admin.role)) {
      res.status(403).json({ success: false, message: `User role ${req.admin?.role} is not authorized to access this route` });
      return;
    }
    next();
  };
};
