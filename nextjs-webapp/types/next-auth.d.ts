import NextAuth from "next-auth/next";
import { UserSession } from "../lib/api/user/selection";

declare module "next-auth" {
    interface Session {
        user: UserSession
    }
}