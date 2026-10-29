import type { Metadata, Viewport } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Shrinath Rotopack | Premium Flexible Packaging Solutions",
  description:
    "Shrinath Rotopack (SLPL) - Adding value to your Creation. World-class flexible packaging, rotogravure printing, barrier laminates, and sustainable packaging solutions.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0c1e2e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", "font-sans", "scroll-smooth")}>
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden selection:bg-[#0b3b7b] selection:text-white">
        {children}
      </body>
    </html>
  );
}
