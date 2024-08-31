import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js App",
  description: "Metadata for the layout apply to all components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>This is the Root Layout, apply to all children including the not-found page</h1>
        <div className="bg-slate-500 h-8 "><h1>Root Header</h1></div>
        {children}
        <div className="bg-slate-500 h-8 "><h1>Root Footer</h1></div>
        </body>
    </html>
  );
}




