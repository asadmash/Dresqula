import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    // configure authetication provider
    providers: [
        GoogleProvider({
            clientId:
            process.env.GOOGLE_CLIENT_ID,
            clientSecret:
            process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    secret:
    process.env.NEXTAUTH_SECRET,
}