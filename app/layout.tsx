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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white text-slate-900">{children}</body>
    </html>
  );
}
