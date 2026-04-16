import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Universal Learning GPS – Navigate Your Future with AI",
  description:
    "Universal Learning GPS is an AI-powered educational platform that creates personalized learning roadmaps, guiding students and professionals toward their academic and career goals.",
  keywords:
    "AI learning, career roadmap, personalized education, skill development, online learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
