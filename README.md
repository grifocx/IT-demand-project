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
│   └── team-chart.tsx      # Team statistics chart
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
- [Prisma](https://www.prisma.io/) - Next-generation ORM for Node.js and TypeScript.
- [Recharts](https://recharts.org/) - A composable charting library built on React components.
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components built using Radix UI and Tailwind CSS.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.

## Contributing

1.  Create a new branch for your feature/fix.
2.  Make your changes.
3.  Run type checking: `npx tsc --noEmit`.
4.  Submit a pull request.

## License

This project is licensed under the MIT License.