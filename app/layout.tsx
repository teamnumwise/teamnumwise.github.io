import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NumWise | Expert Accounting & Bookkeeping Services",
  description:
    "NumWise provides expert accounting, bookkeeping, tax preparation, and CFO advisory services for startups and growing businesses. Let us handle your numbers while you focus on growth.",
  keywords:
    "accounting services, bookkeeping, tax preparation, CFO services, small business accounting, startup accounting, financial advisory",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-binance-white text-binance-ink font-binance">{children}</body>
    </html>
  );
}
