import { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Represents the session object.
   *
   * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
   */
  interface Session {
    user: {
      /** The user's ID. */
      id: string;
      /** The user's role. */
      role: 'ADMIN' | 'MANAGER' | 'TEAM_MEMBER';
    } & DefaultSession["user"]
  }

  /**
   * Represents the user object.
   *
   * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
   */
  interface User extends DefaultUser {
    /** The user's role. */
    role: 'ADMIN' | 'MANAGER' | 'TEAM_MEMBER';
  }
}

declare module "next-auth/jwt" {
  /**
   * Represents the JWT object.
   *
   * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
   */
  interface JWT {
    /** The user's ID. */
    id: string;
    /** The user's role. */
    role: 'ADMIN' | 'MANAGER' | 'TEAM_MEMBER';
  }
}
