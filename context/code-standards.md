# Code Standards

## General
- Keep modules small and single-purpose. Separate frontend components from backend API logic.
- Fix root causes, do not layer workarounds.
- Do not mix unrelated concerns in one component or route (e.g., keep database logic out of Express route definitions; use controllers).

## TypeScript
- Strict mode is required throughout the project (both client and server).
- Avoid `any` use explicit interfaces or narrowly scoped types (e.g., define Mongoose document interfaces).
- Validate unknown external input at system boundaries before trusting it.

## Next.js & Animations
- Default to server components where possible for better performance.
- Add `use client` strictly when wrapping components with `react-bits` for animations or handling browser interactivity.
- Ensure `react-bits` components are dynamically imported if they rely heavily on window objects to prevent SSR hydration mismatches.

## Styling
- Use CSS custom property tokens instead of hardcoded hex values for the dark theme.
- Follow the border radius scale defined in `ui-context.md`.

## API Routes
- Validate and parse request input before any logic runs in the Express controllers.
- Enforce auth and ownership before any mutation (ensure JWT is valid before allowing database/Cloudinary writes).
- Return consistent, predictable response shapes (e.g., `{ success: boolean, data: any, message: string }`).

## Data and Storage
- Metadata and structured content belong in the database (MongoDB).
- Large generated content and media assets belong in file or blob storage (Cloudinary).
- Do not store large content directly in the database.

## File Organization
- `client/app/` Next.js App Router pages and layouts.
- `client/components/` Reusable UI elements and `react-bits` animation wrappers.
- `server/src/controllers/` Express business logic and external service handlers (Cloudinary/Nodemailer).
- `server/src/models/` Mongoose database schemas and types.