import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcryptjs';
import { prisma } from './db';

/**
 * @description The authentication options for NextAuth.
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: AuthOptions = {
  /**
   * @description The session strategy to use.
   * @see https://next-auth.js.org/configuration/options#session
   */
  session: {
    strategy: 'jwt',
  },
  /**
   * @description The authentication providers to use.
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
       * @description The authorize callback for the credentials provider.
       * @param credentials The credentials to authorize.
       * @returns The user object if the credentials are valid, otherwise null.
       * @see https://next-auth.js.org/configuration/providers/credentials#authorize-callback
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
   * @description The callbacks for NextAuth.
   * @see https://next-auth.js.org/configuration/callbacks
   */
  callbacks: {
    /**
     * @description The JWT callback.
     * @param token The JWT token.
     * @param user The user object.
     * @returns The JWT token with the user's ID and role.
     * @see https://next-auth.js.org/configuration/callbacks#jwt-callback
     */
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    /**
     * @description The session callback.
     * @param session The session object.
     * @param token The JWT token.
     * @returns The session object with the user's ID and role.
     * @see https://next-auth.js.org/configuration/callbacks#session-callback
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
   * @description The pages for NextAuth.
   * @see https://next-auth.js.org/configuration/pages
   */
  pages: {
    signIn: '/auth/signin',
  },
  secret: process.env.NEXTAUTH_SECRET,
};
