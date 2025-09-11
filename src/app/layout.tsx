import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

/**
 * @description The metadata for the application.
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata
 */
export const metadata: Metadata = {
  title: 'DemandIT - IT Demand Management',
  description: 'Strategic IT demand and project management platform',
};

/**
 * @description The root layout for the application.
 * @param {object} props - The props for the component.
 * @param {React.ReactNode} props.children - The children to render.
 * @returns {React.ReactElement} - The root layout component.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
