import { ArrowUpRight, BookOpen, BriefcaseBusiness, Code2, GraduationCap, Trophy } from "lucide-react";

const skills = [
  { title: "AI & machine learning", items: "PyTorch, TensorFlow, Hugging Face, LLMs, vision-language models, RAG, model quantization" },
  { title: "Inference & systems", items: "TensorRT, Triton Inference Server, CUDA fundamentals, ONNX, gRPC, Docker, Linux" },
  { title: "Software engineering", items: "Python, C/C++, JavaScript, TypeScript, Java, SQL, FastAPI, Next.js" },
  { title: "Data & storage", items: "Qdrant, Redis, PostgreSQL, SQLite, PySpark, H3, Parquet" },
];

export default function About() {
  return <div className="site-shell inner-page">
    <header className="page-intro about-intro"><p className="section-kicker">A little about me</p><h1>AI ideas, grounded <span>in engineering.</span></h1><p>I’m a computer science student at IIITM Gwalior. I like working where machine learning meets the software and systems that make it useful: inference, retrieval, edge deployment, and reliable interfaces.</p></header>
    <section className="about-columns">
      <div className="about-column"><div className="about-section-title"><BriefcaseBusiness size={18} /><h2>Experience</h2></div><article className="timeline-card"><div className="timeline-head"><div><h3>Tecdatum Infoservices Pvt. Ltd.</h3><p>AI Intern · Hyderabad, India</p></div><span>May — Jul 2026</span></div><ul><li>Built modular Python software and Docker deployment for an automatic number plate recognition system targeting NVIDIA Jetson Nano.</li><li>Developed a TensorRT pipeline for YOLOv8 inference, reducing latency by 68% while maintaining 95% accuracy.</li><li>Designed geospatial escape-route optimization with OSMnx, NetworkX, and a pruned Dijkstra search.</li></ul></article></div>
      <div className="about-column"><div className="about-section-title"><GraduationCap size={18} /><h2>Education</h2></div><article className="timeline-card"><div className="timeline-head"><div><h3>IIITM Gwalior</h3><p>B.Tech · Computer Science & Engineering</p></div><span>2023 — 2027</span></div><p className="timeline-copy">Coursework includes data structures and algorithms, operating systems, databases, computer networks, software engineering, and cryptography.</p></article></div>
    </section>
    <section className="skills-section"><div className="about-section-title"><Code2 size={18} /><h2>Tools I work with</h2></div><div className="skills-grid">{skills.map((group) => <article className="skill-card" key={group.title}><h3>{group.title}</h3><p>{group.items}</p></article>)}</div></section>
    <section className="milestones"><div className="about-section-title"><Trophy size={18} /><h2>Outside the build</h2></div><div className="milestone-grid"><article><strong>1801</strong><span>Peak CodeChef rating</span></article><article><strong>1787</strong><span>Peak LeetCode rating</span></article><article><strong>8,741</strong><span>JEE Mains 2023 AIR</span></article><article><strong>9+ years</strong><span>Karate training · black belt</span></article></div><p className="about-note"><BookOpen size={15} /> Also certified in Google Cloud Gen AI Academy, Google Cybersecurity, and IBM Cybersecurity Fundamentals.</p></section>
    <div className="about-bottom"><span>Curious about a project or role?</span><a href="/contact">Let’s talk <ArrowUpRight size={15} /></a></div>
  </div>;
}
