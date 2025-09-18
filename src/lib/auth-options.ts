import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcryptjs';
import { prisma } from './db';

/**
 * Configuration options for NextAuth.js.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: AuthOptions = {
  /**
   * Strategy for session management.
   * Using 'jwt' for session management.
   *
   * @see https://next-auth.js.org/configuration/options#session
   */
  session: {
    strategy: 'jwt',
  },
  /**
   * Authentication providers.
   * Using the Credentials provider for email and password authentication.
   *
   * @see https://next-auth.js.org/configuration/providers
   */
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      /**
       * Authorize user based on credentials.
       *
       * @param credentials - The user's credentials.
       * @returns The user object if authentication is successful, otherwise null.
       * @throws {Error} If email or password are not provided, user is not found, or password is not valid.
       */
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error('Please enter your email and password');
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) {
          throw new Error('No user found with this email');
        }

        const isPasswordValid = await compare(credentials.password, user.password);

        if (!isPasswordValid) {
          throw new Error('Invalid password');
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role as 'ADMIN' | 'MANAGER' | 'TEAM_MEMBER',
        };
      },
    }),
  ],
  /**
   * Callbacks for NextAuth.js.
   *
   * @see https://next-auth.js.org/configuration/callbacks
   */
  callbacks: {
    /**
     * Called when a JWT is created.
     *
     * @param token - The JWT token.
     * @param user - The user object.
     * @returns The JWT token with user id and role.
     */
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    /**
     * Called when a session is created.
     *
     * @param session - The session object.
     * @param token - The JWT token.
     * @returns The session object with user id and role.
     */
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as 'ADMIN' | 'MANAGER' | 'TEAM_MEMBER';
      }
      return session;
    },
  },
  /**
   * Custom pages for NextAuth.js.
   *
   * @see https://next-auth.js.org/configuration/pages
   */
  pages: {
    signIn: '/auth/signin',
  },
  secret: process.env.NEXTAUTH_SECRET,
};
