import { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * @description The session object.
   * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
   */
  interface Session {
    user: {
      id: string;
      role: 'ADMIN' | 'MANAGER' | 'TEAM_MEMBER';
    } & DefaultSession["user"]
  }

  /**
   * @description The user object.
   * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
   */
  interface User extends DefaultUser {
    role: 'ADMIN' | 'MANAGER' | 'TEAM_MEMBER';
  }
}

declare module "next-auth/jwt" {
  /**
   * @description The JWT object.
   * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
   */
  interface JWT {
    id: string;
    role: 'ADMIN' | 'MANAGER' | 'TEAM_MEMBER';
  }
}
