import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MantineProvider } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cookbook",
  description: "All your recipes in one place",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineProvider>
          <nav>
            <h1>Cookbook</h1>
          </nav>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
