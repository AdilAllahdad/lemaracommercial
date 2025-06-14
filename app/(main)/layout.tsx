import type { Metadata } from "next";
import "../globals.css";


export const metadata: Metadata = {
  title: "Lemara Commercial",
  description: "Your trusted partner in commercial real estate",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
