# DemandIT - IT Demand Management Platform

## Overview

DemandIT is a strategic IT demand and project management platform that helps organizations manage IT demands, projects, and resource allocations. The application provides comprehensive dashboards, demand tracking, project management, and resource allocation capabilities with role-based access control.

## User Preferences

Preferred communication style: Simple, everyday language.

## Replit Environment Setup (September 30, 2025)

**Database Configuration**
- Database: PostgreSQL (Neon-hosted) via Replit's built-in database service
- Prisma schema: Migrated from SQLite to PostgreSQL
- Connection: Available via DATABASE_URL environment variable
- Seeded with initial data including admin user (admin@demandit.com / admin123)

**Environment Variables**
- DATABASE_URL: Automatically set by Replit PostgreSQL service
- NEXTAUTH_SECRET: Generated random secret for JWT signing
- NEXTAUTH_URL: Configured for Replit domain (workspace.ergriffin.repl.co)
- All secrets stored in .env file (excluded from version control)

**Development Workflow**
- Framework: Next.js 14 running on port 5000
- Host: 0.0.0.0 (required for Replit proxy to work)
- Command: `npm run dev -- -p 5000 -H 0.0.0.0`
- Output: Webview (shows in browser preview)
- Cache control: Disabled via next.config.js headers for development

**Deployment Configuration**
- Target: Autoscale (stateless, scales based on demand)
- Build: `npm run build` (compiles Next.js production build)
- Run: `npm run start -- -p 5000 -H 0.0.0.0` (production server)
- Port: 5000 (required for Replit environment)

## System Architecture

### Frontend Architecture

**Framework Choice: Next.js 14 with App Router**
- Problem: Need for a modern, performant web application with good SEO and fast initial load times
- Solution: Next.js App Router with server-side rendering by default
- Rationale: Hybrid rendering approach improves performance and SEO while maintaining interactivity
- Tradeoffs: Server components are the default, requiring explicit "use client" directives for client-side interactivity

**UI Component System: shadcn/ui with Radix UI**
- Problem: Need for accessible, customizable, and consistent UI components
- Solution: shadcn/ui built on top of Radix UI primitives
- Rationale: Provides copy-paste components that are fully customizable and accessible out of the box
- Benefits: Components are owned by the project, not installed as dependencies (except Radix primitives)

**Styling: Tailwind CSS with CSS Variables**
- Problem: Need for maintainable styling with theme support
- Solution: Tailwind CSS utility classes with CSS variables for theme customization
- Rationale: Utility-first approach with dark/light mode support via next-themes
- Theme switching: Managed through CSS variables defined in globals.css

**State Management Strategy**
- Client-side: React hooks (useState, useContext) for local component state
- Server-side data: React Query (@tanstack/react-query) for fetching, caching, and managing server data
- Rationale: Separates concerns between local UI state and server data synchronization
- Benefits: Built-in caching, automatic refetching, and optimistic updates

**Data Visualization**
- Library: Recharts for charts and graphs
- Implementation: Client-side only (dynamic imports with ssr: false)
- Usage: Demand statistics, project statistics, and team member charts

### Backend Architecture

**API Layer: Next.js API Routes**
- Pattern: RESTful API endpoints in `/app/api` directory
- Authentication: Protected via NextAuth session checks
- Authorization: Role-based access control (ADMIN, MANAGER, TEAM_MEMBER)
- Example endpoints: `/api/allocations` for resource allocation management

**Authentication System: NextAuth.js**
- Strategy: JWT-based session management
- Provider: Credentials provider with email/password
- Password hashing: bcryptjs for secure password storage
- Session enhancement: Custom user object includes id and role fields
- Configuration: Centralized in `src/lib/auth-options.ts`

**Authorization Model**
- Three user roles: ADMIN, MANAGER, TEAM_MEMBER
- Admin-only features: Resource management, system configuration
- Manager permissions: Can create allocations and manage projects
- Role enforcement: Server-side checks in API routes and page components

### Data Layer

**ORM: Prisma**
- Problem: Need type-safe database access with schema management
- Solution: Prisma Client with PostgreSQL
- Benefits: Auto-generated TypeScript types, migrations, and query building
- Schema location: `prisma/schema.prisma`
- Singleton pattern: Global Prisma instance to prevent connection exhaustion in development

**Database Structure**
- Core entities: Users, Demands, Projects, Resource Allocations
- Supporting tables: Skills, Priorities, Status, Categories
- Relationships: Many-to-many for user skills, one-to-many for allocations
- Seeding: Initial data script in `prisma/seed.ts` for development

**Data Models**
- User: Includes capacity (hours/week), skills, and role
- Demand: IT requests with status tracking, priority, and category
- Project: Derived from approved demands with timeline and resource tracking
- ResourceAllocation: Links users to projects/demands with time periods and allocated hours

**Resource Utilization Calculation**
- Function: `calculateResourceUtilization` in `src/lib/db.ts`
- Logic: Sums allocated hours for active allocations and compares to user capacity
- Usage: Displays team member availability and utilization percentages

### Type Safety

**TypeScript Configuration**
- Strict mode disabled for gradual type adoption
- Path aliases: `@/*` maps to `src/*` for clean imports
- Type augmentation: NextAuth types extended for custom user fields in `src/types/next-auth.d.ts`

**Form Validation**
- Library: Zod for runtime validation
- Integration: react-hook-form for form state management
- Pattern: Schema-based validation with type inference

## External Dependencies

**Authentication & Authorization**
- NextAuth.js: Complete authentication solution for Next.js
- bcryptjs: Password hashing for credential storage

**Database**
- PostgreSQL: Primary data store (configurable via Prisma)
- Prisma: ORM with type generation and migrations

**UI Libraries**
- Radix UI: Accessible component primitives (@radix-ui/react-*)
- Headless UI: Additional unstyled components (@headlessui/react)
- Lucide React: Icon library
- Heroicons: Alternative icon set

**Data Management**
- TanStack React Query: Server state management and caching
- Axios: HTTP client for API requests

**Visualization**
- Recharts: Composable charting library built on D3

**Styling & Animation**
- Tailwind CSS: Utility-first CSS framework
- tailwindcss-animate: Animation utilities
- Framer Motion: Advanced animations for interactive elements
- next-themes: Theme management for dark/light mode

**Form & Validation**
- react-hook-form: Performant form state management
- Zod: TypeScript-first schema validation
- react-day-picker: Date picker component
- date-fns: Date utility library

**UI Utilities**
- clsx & tailwind-merge: Class name management
- class-variance-authority: Variant-based component styling
- Sonner: Toast notification system

**Development Tools**
- ESLint: Code linting with Next.js configuration
- TypeScript: Type checking and IDE support
- PostCSS: CSS processing with Autoprefixer