import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layout metadata",
  description: "Metadata for the layout apply to all products",
};

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>This is the nested Product Layout nested in Root Layout, apply to all products </h1>
      <div className="bg-yellow-100 h-12">
        <h1>Feature Products</h1>
      </div>
      {children}
    </div>
  );
}
