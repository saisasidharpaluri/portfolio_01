import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return <footer className="site-footer"><div><Link href="/" className="footer-signature">Sai Sasidhar Paluri <span>© 2026</span></Link><p>Made with curiosity in Gwalior, India.</p></div><div className="footer-links"><Link href="https://github.com/saisasidharpaluri" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></Link><Link href="https://www.linkedin.com/in/sai-sasidhar-paluri-896b43289/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></Link><a href="mailto:palurisaisasidhar@gmail.com">Email <ArrowUpRight size={13} /></a></div></footer>;
}