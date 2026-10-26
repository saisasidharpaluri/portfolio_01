import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin, MapPin, MoveUpRight } from "lucide-react";
import { projects } from "@/data/projects";

const featured = projects.slice(0, 3);

export default function Home() {
  return (
    <div className="site-shell">
      <section className="hero-section">
        <div className="hero-copy">
          <div className="eyebrow"><span className="availability-dot" /> AI engineer in the making <span className="eyebrow-divider">/</span> Gwalior, India</div>
          <h1>Building intelligent systems that <span>work in the real world.</span></h1>
          <p className="hero-intro">I’m Sai Sasidhar, a computer science student focused on AI engineering, inference systems, and thoughtful software. I turn research ideas into dependable tools, from edge devices to multimodal search.</p>
          <div className="hero-actions">
            <Link href="/projects" className="button button-dark">Explore selected work <ArrowRight size={16} /></Link>
            <Link href="/contact" className="text-link">Get in touch <MoveUpRight size={15} /></Link>
          </div>
          <div className="hero-meta"><span><MapPin size={14} /> Currently at IIITM Gwalior</span><span>Open to AI & software roles</span></div>
        </div>

        <div className="hero-visual">
          <div className="photo-frame">
            <Image src="/my_photo_2.jpeg" alt="Sai Sasidhar Paluri" fill priority sizes="(max-width: 800px) 82vw, 400px" className="hero-photo" />
            <div className="photo-stamp"><span>SSP</span><span>AI · systems · software</span></div>
          </div>
          <div className="visual-note"><span className="note-index">01</span><span>Curious by default.<br />Practical by design.</span><ArrowDownRight size={17} /></div>
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
        </div>
      </section>

      <section className="signal-strip" aria-label="Profile highlights">
        <div><span className="signal-number">03</span><span className="signal-label">Role-focused resumes</span></div>
        <div><span className="signal-number">AI</span><span className="signal-label">Engineering & inference</span></div>
        <div><span className="signal-number">’27</span><span className="signal-label">B.Tech, IIITM Gwalior</span></div>
        <a href="https://github.com/saisasidharpaluri" target="_blank" rel="noreferrer" className="signal-link">Explore GitHub <ArrowUpRight size={15} /></a>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <div><p className="section-kicker">A selection of recent work</p><h2>Built to be <span>useful.</span></h2></div>
          <Link href="/projects" className="text-link">All projects <ArrowRight size={15} /></Link>
        </div>
        <div className="featured-grid">
          {featured.map((project, index) => (
            <article className={`project-card project-card-${index + 1}`} key={project.id}>
              <Link className={`project-art art-${project.visual}`} href={`/projects#${project.id}`} aria-label={`View ${project.title}`}>
                <span className="art-label">{project.category}</span>
                {project.visual === "sentinel" && <div className="sentinel-art"><div className="pulse-ring" /><div className="shield-shape">✓</div><span className="art-caption">policy / review / action</span></div>}
                {project.visual === "triton" && <div className="triton-art"><span>INPUT</span><i /><i /><i /><i /><b>GPU</b><small>batch → infer → return</small></div>}
                {project.visual === "vision" && <div className="vision-art"><div className="vision-window"><span>SEARCH / DOCUMENTS</span><b>Find the signal<br />in every page.</b><div className="vision-lines"><i /><i /><i /></div></div><span className="vision-chip">image + text ↗</span></div>}
              </Link>
              <div className="project-card-body">
                <div className="project-topline"><span>{project.eyebrow}</span><span>0{index + 1}</span></div>
                <h3><Link href={`/projects#${project.id}`}>{project.title}</Link></h3>
                <p>{project.summary}</p>
                <div className="project-card-bottom"><div className="mini-tags">{project.stack.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div><a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`}><Github size={17} /></a></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-band">
        <div className="experience-mark">TS</div>
        <div className="experience-main"><p className="section-kicker">Industry experience · May — July 2026</p><h2>AI Intern <span>at Tecdatum Infoservices</span></h2><p>Worked on an edge AI and ANPR system for NVIDIA Jetson Nano, accelerated YOLOv8 inference with TensorRT, and built geospatial escape-route optimization.</p></div>
        <div className="experience-proof"><strong>68%</strong><span>latency reduction<br />reported in resume</span></div>
      </section>

      <section className="closing-cta">
        <div><p className="section-kicker">Want the details?</p><h2>Choose the version<br />that fits the role.</h2></div>
        <div className="closing-actions"><Link href="/resume" className="button button-lime">Browse my resumes <ArrowRight size={16} /></Link><div className="social-inline"><a href="https://github.com/saisasidharpaluri" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a><a href="https://www.linkedin.com/in/sai-sasidhar-paluri-896b43289/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a></div></div>
      </section>
    </div>
  );
}
