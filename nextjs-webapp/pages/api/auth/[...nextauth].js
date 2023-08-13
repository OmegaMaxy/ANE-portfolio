import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import { login } from '../../../services/users'

export const authOptions = {
    session: {
        strategy: 'jwt',
    },
    // Configure one or more authentication providers
    providers: [
        /*GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),*/
        CredentialsProvider({
            name: "Credentials",

            credentials: {
                email: { label: "Email", type: "text", placeholder: "john.doe@acme.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const data = await login(credentials)
                if (data.user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return data.user
                } else {
                    throw new Error("Wrong credentials.")
                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        }),
    ],
    pages: {
        signIn: "/login",
        error: "/login", // what about error at signup?
    },
    callbacks: {
        async jwt({ token, account, user }) {
            // Persist the OAuth access_token to the token right after signin
            if (account) {
                token.accessToken = account.access_token
                token.user = {
                    id: user.id,
                    email: user.email,
                    fullname: user.fullname,
                    profile_picture: user.profile_picture,
                    portfolio_banner: user.portfolio_banner,
                }
            }
            return token
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token from a provider.
            let newSession = token
            newSession.expires = session.expires
            //session.accessToken = token.accessToken
            return newSession
        }
    }
}

export default NextAuth(authOptions)