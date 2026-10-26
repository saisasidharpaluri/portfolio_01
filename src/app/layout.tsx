import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "Sai Sasidhar Paluri — AI & Software Engineer", template: "%s | Sai Sasidhar Paluri" },
  description: "Portfolio of Sai Sasidhar Paluri: AI engineering, inference systems, multimodal search, and software projects.",
  openGraph: { title: "Sai Sasidhar Paluri — AI & Software Engineer", description: "AI engineering, inference systems, and practical software." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Navbar /><main>{children}</main><Footer /></body></html>;
}
