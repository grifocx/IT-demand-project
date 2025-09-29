# DemandIT - IT Demand Management

DemandIT is a strategic IT demand and project management platform built with Next.js, TypeScript, and Prisma. It provides a comprehensive solution for managing IT demands, projects, and resources, enabling organizations to make informed decisions and optimize their IT landscape.

## Features

- **Dashboard:** A comprehensive overview of all demands, projects, and resources.
- **Demand Management:** Create, track, and manage IT demands from submission to completion.
- **Project Management:** Plan, execute, and monitor projects with ease.
- **Resource Management:** Allocate and track resources across projects and demands.
- **Authentication:** Secure authentication and authorization with NextAuth.
- **Data Visualization:** Interactive charts and graphs for data-driven insights.

## Architecture

This application is built with the Next.js App Router, which enables a hybrid approach to rendering, with most components being server-rendered by default. This improves performance and SEO, while still allowing for client-side interactivity where needed using the `'use client'` directive.

### Authentication

Authentication is handled by NextAuth.js, a complete open-source authentication solution for Next.js applications. It is configured in `src/lib/auth-options.ts` and uses a Credentials provider for email and password authentication. User sessions are managed using JSON Web Tokens (JWTs).

### Database

The application uses a PostgreSQL database, with Prisma as the Object-Relational Mapper (ORM). The database schema is defined in `prisma/schema.prisma` and includes tables for users, demands, projects, resources, and more. Prisma Client is used to interact with the database in a type-safe manner.

The database can be seeded with initial data by running `npx prisma db seed`. The seed script is located at `prisma/seed.ts`.

### UI Components

The user interface is built with React and styled with Tailwind CSS. Reusable UI components are built using `shadcn/ui`, which provides a set of accessible and customizable components built on top of Radix UI and styled with Tailwind CSS. These components are located in the `src/components/ui` directory.

### State Management

-   **Client-side state:** For managing local component state, React's built-in hooks like `useState` and `useContext` are used.
-   **Server-side state:** For fetching, caching, and managing server-side data, the application uses React Query (`@tanstack/react-query`). This provides a powerful and efficient way to handle data fetching and synchronization with the server.

## Project Structure

```
src/
├── app/                    # App Router pages
│   ├── api/                # API routes
│   └── auth/               # Authentication pages
├── components/
│   ├── ui/                 # Reusable UI components from shadcn/ui
│   ├── demand-chart.tsx    # Demand statistics chart
│   ├── project-chart.tsx   # Project statistics chart
│   ├── team-chart.tsx      # Team statistics chart
│   ├── icons.tsx           # Icon library
│   └── theme-provider.tsx  # Theme provider for dark/light mode
├── lib/
│   ├── auth-options.ts     # NextAuth configuration
│   ├── db.ts               # Prisma client and database utilities
│   └── utils.ts            # Utility functions
└── types/
    ├── index.ts            # Shared type definitions
    └── next-auth.d.ts      # NextAuth type extensions
```

## Development Setup

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Set up environment variables:**

    Create a `.env` file in the root of the project and add the following variables:

    ```env
    DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
    NEXTAUTH_SECRET="your-secret-here"
    NEXTAUTH_URL="http://localhost:3000"
    ```

3.  **Run database migrations:**

    ```bash
    npx prisma migrate dev
    ```

4.  **Seed the database:**

    ```bash
    npx prisma db seed
    ```

5.  **Run the development server:**

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:3000`.

## Available Scripts

- `dev`: Runs the development server.
- `build`: Builds the application for production.
- `start`: Starts the production server.
- `lint`: Lints the code using ESLint.
- `type-check`: Checks for TypeScript errors.

## Code Documentation

The codebase is thoroughly documented using JSDoc-style docstrings. This provides in-editor documentation for all functions, classes, and components, making it easier to understand the purpose of each part of the application.

## Key Dependencies
- [Next.js](https://nextjs.org/) - React framework for production.
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript.
- [NextAuth.js](https://next-auth.js.org/) - Authentication for Next.js.
- [Prisma](https://www.prisma.io/) - Next generation ORM for Node.js and TypeScript.
- [Recharts](https://recharts.org/) - A composable charting library built on React components.
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components built using Radix UI and Tailwind CSS.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.

## Resource Management Plan (Consolidated)

This project includes an IT Resource Management module to manage capacity, allocations, and prioritization.

- **Vision:** One place to manage demand (projects and O&M), track who is working on what, measure capacity and availability, and prioritize work.
- **Core Concepts:**
  - `User.capacity` = baseline weekly capacity (hours).
  - `ResourceAllocation` links a user to a `Project` and optional `Demand` with `startDate`, `endDate`, `allocatedHours`, `role`, `status`.
  - `Priority`, `Status`, and `Category` support planning and portfolio views.
- **Data Model:** See `prisma/schema.prisma` for `User`, `Project`, `Demand`, `ResourceAllocation`, `Status`, `Priority`, `Category`, `Tag`, `Skill`, `Attachment`, `Comment`.

### Feature roadmap

1. Resource Management UI (`/resources`)
   - Overview KPIs, team workload bars, upcoming allocations.
   - Team view: member allocations, utilization, availability.
   - Projects view: allocation by project (stacked bars) [phase 2].
   - Calendar view: week timeline [phase 2].
2. Allocation CRUD APIs
   - `POST /api/allocations`, `GET /api/allocations`, `PATCH /api/allocations/:id`, `DELETE /api/allocations/:id`.
   - Validation for dates and non-negative hours.
3. Prioritization
   - Combine business value, complexity, due date; support scoring + manual ranking.
4. Reporting & Analytics
   - Utilization by team/role, capacity vs demand, staffing forecasts.
5. Admin & Governance
   - Roles: `ADMIN`, `MANAGER`, `TEAM_MEMBER` with appropriate capabilities.

### API Contracts (Initial)

- Create Allocation
  ```http
  POST /api/allocations
  {
    userId: string,
    projectId: string,
    demandId?: string,
    startDate: string,   // ISO
    endDate: string,     // ISO
    allocatedHours: number, // per week
    role: string
  }
  ```
- Update Allocation
  ```http
  PATCH /api/allocations/:id
  {
    allocatedHours?: number,
    startDate?: string,
    endDate?: string,
    role?: string,
    status?: 'PLANNED'|'IN_PROGRESS'|'COMPLETED'|'ON_HOLD'
  }
  ```
- Delete Allocation
  ```http
  DELETE /api/allocations/:id
  ```
- List Allocations
  ```http
  GET /api/allocations?userId=&projectId=&from=&to=
  ```

### UX Flows

- Team members update capacity and allocations (or propose for approval).
- Managers create projects/demands and assign allocations across the team.
- Dashboard surfaces over-allocations (>100%), underutilization (<70%), upcoming gaps.

### Milestones

- M1: Resources page (Overview, Team) — DONE
- M2: Allocation CRUD API + New Allocation form
- M3: Project view + Filters
- M4: Calendar view
- M5: Analytics reports + exports

### Risks & Mitigations

- Overlapping allocations may exceed capacity → validate per user/window; flag visually.
- Demand/Project data integrity → enforce via relations and service-level constraints.
- Adoption and data freshness → lightweight reminders on dashboard.

## Phase 2: Reporting and Analytics (Consolidated)

- Reporting page at `src/app/reporting/page.tsx` with charts.
- API endpoints in `src/app/api/reporting/` for demand, project, and resource analytics.
- Visualizations with `recharts` (bar, line, pie).
- Filtering (date range, project, user) and export to CSV/PDF.
- Tests for endpoints and reporting page.

## Next Features (Backlog)

- Over-allocation warnings: In `src/app/resources/page.tsx`, flag members with utilization > 100% and color the bar red.
- Projects tab: Implement a grouped view by project with total hours and member breakdown.
- Calendar: Add a basic week timeline using `date-fns` for allocation spans.

## Contributing

1.  Create a new branch for your feature/fix.
2.  Make your changes.
3.  Run type checking: `npx tsc --noEmit`.
4.  Submit a pull request.
