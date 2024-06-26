import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "../../globals.css";
import { NextAuthProvider } from "@/auth/providers";
import { ThemeProvider } from "@/components/dark-mode/theme-provider";
import { SideBar } from "@/components/complex";
import Providers from "@/react-query/providers";
const space = Space_Grotesk({ subsets: ["latin"] });
import { Toaster } from "@/components/ui/sonner";
export const metadata: Metadata = {
  title: "Preacta Admin Home",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body className={space.className}>
          <Providers>
            <main className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-slate-100 to-zinc-400">
              {children}
            </main>
            <Toaster richColors position="top-center" />
          </Providers>
        </body>
      </NextAuthProvider>
    </html>
  );
}
