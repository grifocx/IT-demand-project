import Link from 'next/link';
import { UserButton } from './user-button';
import { MainNavItem } from '@/types';
import { cn } from '@/lib/utils';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { Icons } from './icons';

/**
 * A component that displays the main navigation bar.
 *
 * @returns The main navigation bar component or null if the user is not authenticated.
 */
export function MainNav() {
  const { data: session } = useSession();
  const pathname = usePathname();

  const mainNavItems: MainNavItem[] = [
    {
      title: 'Dashboard',
      href: '/',
      icon: 'dashboard',
    },
    {
      title: 'Demands',
      href: '/demands',
      icon: 'fileText',
    },
    {
      title: 'Projects',
      href: '/projects',
      icon: 'folderKanban',
    },
    {
      title: 'Resources',
      href: '/resources',
      icon: 'users',
      adminOnly: true,
    },
    {
      title: 'Reports',
      href: '/reports',
      icon: 'barChart',
    },
  ];

  if (!session) return null;

  return (
    <div className="flex h-16 items-center border-b px-4">
      <div className="flex items-center space-x-4">
        <Link href="/" className="flex items-center space-x-2">
          <Icons.logo className="h-6 w-6" />
          <span className="font-bold">DemandIT</span>
        </Link>
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          {mainNavItems.map((item) => {
            if (item.adminOnly && !['ADMIN', 'MANAGER'].includes(session.user.role)) return null;
            const Icon = Icons[item.icon as keyof typeof Icons];
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center transition-colors hover:text-foreground/80',
                  pathname === item.href
                    ? 'text-foreground'
                    : 'text-foreground/60',
                )}
              >
                {Icon && <Icon className="mr-2 h-4 w-4" />}
                {item.title}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="ml-auto flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <Icons.bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
        <UserButton />
      </div>
    </div>
  );
}
