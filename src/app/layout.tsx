import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tulas International School | Learn Big. Live Fully.",
  description:
    "Discover Tulas International School, a leading boarding and day school in Dehradun, Uttarakhand. Explore campus life and admissions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
