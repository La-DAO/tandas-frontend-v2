import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import { PrivyAuthProvider } from "@/components/providers/privy-provider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tandas Web3",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PrivyAuthProvider>
            {children}
          </PrivyAuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
