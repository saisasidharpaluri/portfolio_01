import { ArrowDownToLine, ArrowUpRight, FileText } from "lucide-react";

const resumes = [
  { title: "AI Engineer", focus: "Applied AI, multimodal retrieval, and product engineering", file: "/resume-ai-engineer.pdf", number: "01", tint: "resume-card-lime", tags: ["PyTorch", "Vision RAG", "AI products"] },
  { title: "AI Inference Engineer", focus: "Model serving, quantization, and GPU performance", file: "/resume-ai-inference.pdf", number: "02", tint: "resume-card-blue", tags: ["TensorRT", "Triton", "C++ / CUDA"] },
  { title: "Software Engineer", focus: "Full-stack systems, backend engineering, and data", file: "/resume-software-engineer.pdf", number: "03", tint: "resume-card-orange", tags: ["TypeScript", "Python", "Systems"] },
];

export default function Resume() {
  return <div className="site-shell inner-page">
    <header className="page-intro resume-intro"><p className="section-kicker">Experience, skills & education</p><h1>Pick the resume for <span>the conversation.</span></h1><p>Three concise versions, each shaped around a different kind of engineering role.</p></header>
    <section className="resume-grid" aria-label="Download a resume">
      {resumes.map((resume) => <article className={`resume-card ${resume.tint}`} key={resume.file}><div className="resume-card-top"><span className="resume-number">{resume.number}</span><FileText size={21} /></div><div><p className="resume-type">PDF · Updated 2026</p><h2>{resume.title}</h2><p className="resume-focus">{resume.focus}</p></div><div className="resume-tags">{resume.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="resume-actions"><a href={resume.file} download className="button button-dark"><ArrowDownToLine size={16} /> Download PDF</a><a href={resume.file} target="_blank" rel="noreferrer" className="resume-preview" aria-label={`Preview ${resume.title} resume`}><ArrowUpRight size={18} /></a></div></article>)}
    </section>
    <div className="resume-footnote"><span>Prefer a direct link?</span><a href="mailto:palurisaisasidhar@gmail.com">palurisaisasidhar@gmail.com <ArrowUpRight size={14} /></a><span className="resume-footnote-note">Each PDF opens in a new tab or downloads to your device.</span></div>
  </div>;
}
