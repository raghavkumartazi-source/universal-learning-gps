import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import SiteFooter from "@/components/site-footer";
import SiteNav from "@/components/site-nav";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://universallearninggps.app"),
  title: {
    default: "Universal Learning GPS",
    template: "%s | Universal Learning GPS",
  },
  description: "AI-powered personalized learning roadmaps, skill gap analysis, and career mentorship.",
  keywords: ["AI learning roadmap", "career guidance", "skill gap analysis", "education platform"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full`}>
      <body className="min-h-full bg-[#1A1A2E] text-white antialiased">
        <SiteNav />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 md:px-8">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
