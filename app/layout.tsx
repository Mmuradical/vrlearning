import type { Metadata } from "next";
import { Krona_One } from "next/font/google";
import "./globals.css";

const krona = Krona_One({
  variable: "--font-krona",
  subsets: ["latin"],
  weight: "400", 
  display: "swap",
});

export const metadata: Metadata = {
  title: "VR Learning",
  description:
    "Immersive, in-school free-roam Virtual Reality field trips for students.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${krona.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}