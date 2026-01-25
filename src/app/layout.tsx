import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "J Babawale | Designer & Builder",
  description: "Personal portfolio of J Babawale, a designer and builder crafting premium digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
