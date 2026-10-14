import type { Metadata } from "next";
import { Quicksand, Inter, Roboto_Mono} from "next/font/google";
import "./globals.css";
import { StarsBackground } from "../components/animate-ui/components/backgrounds/stars";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from '../components/ui/sonner'
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

const quicksand = Quicksand({ subsets: ["latin"] });

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

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
      <body
        className={`${robotoMono.className} ${quicksand.className} ${inter.className} antialiased relative`}
      >
        <Navbar></Navbar>
        {/* <StarsBackground>{children}</StarsBackground> */}
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
