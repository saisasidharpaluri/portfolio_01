import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return <div className="site-shell inner-page contact-page">
    <header className="page-intro contact-intro"><p className="section-kicker">Open channel</p><h1>Good work starts <span>with a hello.</span></h1><p>Have a role, a project, or a question about something I’ve built? I’m glad to hear from you.</p></header>
    <section className="contact-layout">
      <div className="contact-main"><p className="contact-lead">I’m currently interested in AI engineering, inference systems, and software roles where I can build, learn, and ship alongside a thoughtful team.</p><a href="mailto:palurisaisasidhar@gmail.com" className="email-link">palurisaisasidhar@gmail.com <ArrowUpRight size={20} /></a><div className="contact-socials"><a href="https://github.com/saisasidharpaluri" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a><a href="https://www.linkedin.com/in/sai-sasidhar-paluri-896b43289/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} /></a></div></div>
      <aside className="contact-aside"><p className="section-kicker">A few details</p><div><MapPin size={17} /><span><b>Based in</b>Gwalior, Madhya Pradesh, India</span></div><a href="tel:+919494929237"><Phone size={17} /><span><b>Phone</b>+91 94949 29237</span><ArrowUpRight size={14} /></a><a href="mailto:palurisaisasidhar@gmail.com"><Mail size={17} /><span><b>Email</b>Send a note anytime</span><ArrowUpRight size={14} /></a><div className="contact-status"><i /> Open to relevant opportunities</div></aside>
    </section>
  </div>;
}
