import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JOVIA",
  description:
    "JOVIA is a multinational intelligent networking platform designed to help users earn for the time they spend through networking, digital skills, entertainment, and engaging activities. Users can participate in activities, set countdown timers, and earn rewards for every second spent on the platform.",
  keywords: [
    "JOVIA",
    "networking platform",
    "earn online",
    "digital skills",
    "entertainment",
    "rewards platform",
    "countdown earning",
    "intelligent networking",
    "online income",
  ],
  applicationName: "JOVIA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}