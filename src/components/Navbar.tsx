"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <nav className="nav-wrap" aria-label="Main navigation">
        <Link href="/" className="brand-mark" onClick={() => setOpen(false)} aria-label="Sai Sasidhar home"><span>SS</span><b>Sai Sasidhar <i>Paluri</i></b></Link>
        <div className={open ? "nav-links open" : "nav-links"}>
          {navLinks.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={pathname === item.href ? "nav-link current" : "nav-link"}>{item.label}</Link>)}
          <ThemeToggle />
        </div>
        <button className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
      </nav>
    </header>
  );
}
