# Architecture Context

## Stack
| Layer     | Technology                  | Role                                       |
| --------- | --------------------------- | ------------------------------------------ |
| Framework | Next.js + TypeScript        | User-facing UI, routing, SSR               |
| Backend   | Express.js + TypeScript     | API serving, business logic, form handling |
| UI        | Tailwind + shadcn/ui        | Utility-first styling and base components  |
| Animation | react-bits                  | All text, scroll, background, & image anims|
| Database  | MongoDB + Mongoose          | Storing services, portfolios, inquiries    |
| Storage   | Cloudinary                  | Cloud media storage & optimization         |
| Mailing   | Nodemailer                  | Sending emails for inquiries               |

## System Boundaries
- `client/` Contains all Next.js frontend code, `react-bits` implementations, public-facing UI, and API consumption logic.
- `server/` Contains the Express.js server setup, middleware, and database connection.
- `server/routes/` Owns the API endpoints definitions and routing logic.
- `server/controllers/` Owns the business logic, Cloudinary upload logic, and Nodemailer dispatchers.
- `server/models/` Owns the Mongoose schemas and database interfaces.

## Storage Model
- **Database**: Metadata, admin user credentials (hashed), service details, text content, and Cloudinary image URLs live here in MongoDB.
- **Blob/File Storage**: All generated files, large media, and image uploads (Services, Events, Artists) live here in Cloudinary.

## Auth and Access Model
- Public access is granted for fetching active services, portfolios, and submitting contact forms.
- Admin authentication is handled via JWT. Only authenticated admins can log into the Admin Panel.
- Access control restricts mutations (Create, Update, Delete) and Cloudinary uploads exclusively to authenticated admins.

## Invariants
1. The codebase must never store raw images or Base64 data directly in the MongoDB database; Cloudinary must be used for all media.
2. API routes must never trust client input; all incoming Express requests (especially forms and uploads) must be validated before processing.
3. API credentials (MongoDB URI, Cloudinary secrets, SMTP passwords) must never be hardcoded and must strictly reside in `.env`.
4. All UI interactions and scroll events must leverage `react-bits` components to maintain a consistent animation standard.