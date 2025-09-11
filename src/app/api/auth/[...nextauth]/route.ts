import NextAuth from 'next-auth';
import { authOptions } from '@/lib/auth-options';

/**
 * @description The NextAuth handler.
 * @see https://next-auth.js.org/getting-started/introduction
 */
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
