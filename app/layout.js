'use client'; // Menandakan bahwa ini adalah Client Component

import { SessionProvider } from "next-auth/react"; // Impor SessionProvider
import '../styles/global.css'; // Impor file CSS global

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My Next.js App</title>
      </head>
      <body>
        <SessionProvider>
          {children} {/* SessionProvider membungkus seluruh aplikasi */}
        </SessionProvider>
      </body>
    </html>
  );
}
