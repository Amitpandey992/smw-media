# SMW Media & Entertainment

## Overview
SMW Media & Entertainment Pvt. Ltd. is a full-service media, entertainment, branding, and digital communications company. This project is a full-stack web application consisting of a highly modern, animated frontend for users and a secure Express/Mongoose backend admin panel. It will showcase their 9 diverse verticals and allow seamless dynamic updates via an admin dashboard. Every step of the user journey will be heavily animated using `react-bits`.

## Goals
1. Establish a premium, creative, highly animated online presence utilizing `react-bits` for maximum visual impact.
2. Create a fully functional Custom Admin Panel for SMW staff to manage services, portfolios, and images.
3. Handle user inquiries efficiently via automated email routing using Nodemailer.
4. Ensure highly optimized media delivery using external image management via Cloudinary.

## Core User Flow
1. User lands on the immersive homepage with high-performance `react-bits` background and text animations.
2. User scrolls through interactive sections highlighting the 9 distinct business verticals, utilizing scroll and image animations.
3. User navigates to a specific vertical (e.g., Music Production) to view dynamic portfolio content fetched from the backend.
4. User submits a "Get in Touch" form, which triggers a backend Nodemailer process, and an Admin manages the inquiry via the secure dashboard.

## Features

### Public Frontend
- Dynamic hero sections, custom cursor, and deep integration of `react-bits` for background effects and UI components.
- Scroll-triggered reveals and text animations for all 9 business verticals and news/podcast sections.
- Animated dynamic portfolio galleries and forms for contact, artist submissions, and auditions.

### Backend & Admin Panel
- Secure Admin Dashboard with JWT authentication to manage website content.
- CRUD operations for Services, Portfolio, News, and Artists using Express and Mongoose.
- Direct Cloudinary integration for fast image uploads, storage, and optimization.
- Automated email responses and admin notifications via Nodemailer.

## Scope

### In Scope
- Frontend: Next.js, Tailwind CSS, `react-bits` (for all animations), TypeScript.
- Backend: Express.js, Node.js, Mongoose (MongoDB), TypeScript.
- External Services: Cloudinary (media storage), Nodemailer (email service).
- Admin Panel: Custom UI for managing database records and uploading images.

### Out of Scope
- Client-facing dashboard or e-commerce functionality.
- Complex multi-role RBAC (Role-Based Access Control) for admins.

## Success Criteria
1. Website achieves 90+ Lighthouse score on desktop despite heavy `react-bits` animations and external image fetching.
2. An admin can successfully upload an image to Cloudinary and save the associated record in MongoDB without touching code.
3. A user submitting the contact form instantly triggers an email notification via Nodemailer and saves the data in the database.