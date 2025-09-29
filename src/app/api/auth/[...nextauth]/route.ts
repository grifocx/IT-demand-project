import NextAuth from 'next-auth';
import { authOptions } from '@/lib/auth-options';

/**
 * The NextAuth.js API route handler.
 *
 * @see https://next-auth.js.org/getting-started/introduction
 */
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
