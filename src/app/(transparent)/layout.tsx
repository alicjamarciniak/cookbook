import "../globals.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import type { Metadata } from "next";
import { Abril_Fatface, Eczar, PT_Sans } from "next/font/google";
import { Toaster } from "sonner";
import { Footer, Navbar } from "@/components";

const eczarFont = Eczar({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-eczar",
});

const ptSansFont = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-sans",
});

const abrilFatfaceFont = Abril_Fatface({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-abril-fatface",
});

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
    <html lang="en" className="scroll-smooth">
      <head>
        <ColorSchemeScript />
        <link rel="icon" type="image/x-icon" href="/img/cookbook_min.png" />
      </head>
      <body
        className={`${eczarFont.variable} ${ptSansFont.variable} ${abrilFatfaceFont.variable} bg-dark-white relative`}
      >
        <MantineProvider
          theme={{
            // default font-family
            fontFamily: ptSansFont.style.fontFamily,
          }}
        >
          <Navbar dark transparent />
          <Toaster position="top-right" closeButton />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
