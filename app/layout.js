// "use client";

import "./globals.css";
import { AuthContextProvider } from "./context/AuthContext";

// Componetns
import Nav from "./components/Nav";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthContextProvider>
        <body className="mx-4">
          <Nav />
          <main>{children}</main>
        </body>
      </AuthContextProvider>
    </html>
  );
}
