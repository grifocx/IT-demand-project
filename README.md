# DemandIT - IT Demand Management

DemandIT is a strategic IT demand and project management platform built with Next.js, TypeScript, and Prisma. It provides a comprehensive solution for managing IT demands, projects, and resources.

## Features

- **Dashboard:** A comprehensive overview of all demands, projects, and resources.
- **Demand Management:** Create, track, and manage IT demands from submission to completion.
- **Project Management:** Plan, execute, and monitor projects with ease.
- **Resource Management:** Allocate and track resources across projects and demands.
- **Authentication:** Secure authentication and authorization with NextAuth.
- **Data Visualization:** Interactive charts and graphs for data-driven insights.

## Architecture

This application is built with the Next.js App Router, which enables a hybrid approach to rendering. Most components are server-rendered by default, but can be made client-side components with the `'use client'` directive.

- **Authentication:** Authentication is handled by NextAuth.js, with a credentials provider for email and password authentication. Session management is done using JWTs.
- **Database:** Prisma is used as the ORM to interact with the PostgreSQL database. The database schema is defined in `prisma/schema.prisma`.
- **UI:** The UI is built with React and Tailwind CSS. Reusable UI components are built with Radix UI and are located in `src/components/ui`.
- **State Management:** For client-side state, React's built-in state management (e.g., `useState`, `useContext`) is used. For server-side data fetching and caching, React Query is used.
- **Styling:** Tailwind CSS is used for styling, with `tailwind-merge` and `clsx` for managing class names.

## Project Structure

```
src/
├── app/                    # App Router pages
│   ├── api/                # API routes
│   └── auth/               # Authentication pages
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── demand-chart.tsx    # Demand statistics chart
│   ├── project-chart.tsx   # Project statistics chart
│   └── team-chart.tsx      # Team statistics chart
├── lib/
│   ├── auth-options.ts     # NextAuth configuration
│   ├── db.ts               # Prisma client
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
- `lint`: Lints the code.
- `type-check`: Checks for TypeScript errors.

## Key Dependencies

- [Next.js](https://nextjs.org/) - React framework for production.
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript.
- [NextAuth.js](https://next-auth.js.org/) - Authentication for Next.js.
- [Prisma](https://www.prisma.io/) - Next-generation ORM for Node.js and TypeScript.
- [Recharts](https://recharts.org/) - A composable charting library built on React components.
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components for building high-quality design systems.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.

## Contributing

1.  Create a new branch for your feature/fix.
2.  Make your changes.
3.  Run type checking: `npx tsc --noEmit`.
4.  Submit a pull request.

## License

This project is licensed under the MIT License.
