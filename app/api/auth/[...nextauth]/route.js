// app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,       // Pastikan variabel env sudah diset
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    // Callback redirect setelah login/logout
    async redirect({ url, baseUrl }) {
      // Jika url sama dengan baseUrl (misal login sukses), arahkan ke /news
      if (url === baseUrl) {
        return `${baseUrl}/news`;
      }
      // Untuk url lain, kembalikan seperti aslinya
      return url;
    },
  },
};

const handler = NextAuth(authOptions);

// Export handler untuk method GET dan POST sesuai Next.js 13 App Router
export { handler as GET, handler as POST };
