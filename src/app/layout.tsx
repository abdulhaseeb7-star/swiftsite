import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SwiftSite — Modern Web Design Agency",
  description: "Fast, modern websites for restaurants and businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}