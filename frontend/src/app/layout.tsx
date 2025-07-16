// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "NBA Stats",
    description: "Dynamic NBA data visualizations and comparisons",
    icons: {
        icon: "/favicon.webp",
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen bg-gray-100 text-black">
            {children}
        </main>
        </body>
        </html>
    );
}