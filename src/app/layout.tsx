import type { Metadata } from "next";
import { Quicksand, Inter} from "next/font/google";
import "./globals.css";
import { StarsBackground } from "../components/animate-ui/components/backgrounds/stars";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rebecca | Frontend Developer",
  description:
    "UI-focused frontend developer specialising in React & TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.webp" />
      </head>
      <body className={`${inter.className} ${quicksand.className} antialiased`}>
        <StarsBackground>{children}</StarsBackground>
        <Analytics />
      </body>
    </html>
  );
}
