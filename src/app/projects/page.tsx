"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, ExternalLink, Github, Search, SlidersHorizontal, X } from "lucide-react";
import { projects } from "@/data/projects";

const categories = ["All work", ...Array.from(new Set(projects.map((project) => project.category)))];

export default function Projects() {
  const [category, setCategory] = useState("All work");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => projects.filter((project) => {
    const matchesCategory = category === "All work" || project.category === category;
    const haystack = `${project.title} ${project.summary} ${project.stack.join(" ")} ${project.details.join(" ")}`.toLowerCase();
    return matchesCategory && haystack.includes(query.trim().toLowerCase());
  }), [category, query]);

  return (
    <div className="site-shell inner-page">
      <header className="page-intro">
        <p className="section-kicker">Selected work / 2026</p>
        <h1>Projects with a point <span>of view.</span></h1>
        <p>From safer AI workflows to faster model serving, these are the systems I’ve been learning by building.</p>
        <div className="page-intro-meta"><span>{projects.length} projects</span><span>AI · inference · data · edge</span></div>
      </header>

      <section className="project-browser" aria-label="Project library">
        <div className="project-toolbar">
          <div className="filter-label"><SlidersHorizontal size={15} /> Filter projects</div>
          <div className="filter-pills" role="group" aria-label="Filter by project category">
            {categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={category === item ? "filter-pill active" : "filter-pill"}>{item}</button>)}
          </div>
          <label className="search-box"><Search size={16} /><span className="sr-only">Search projects</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects or tools" />{query && <button aria-label="Clear search" onClick={() => setQuery("")}><X size={15} /></button>}</label>
        </div>

        <div className="project-list">
          {filtered.map((project, index) => (
            <article className="project-row" id={project.id} key={project.id}>
              <div className={`project-row-art art-${project.visual}`} aria-hidden="true">
                <span className="row-art-index">0{index + 1}</span>
                {project.visual === "sentinel" && <div className="row-shield">✓</div>}
                {project.visual === "triton" && <div className="row-nodes"><i /><i /><i /><b>GPU</b></div>}
                {project.visual === "vision" && <div className="row-doc"><i /><i /><i /></div>}
                {project.visual === "georisk" && <div className="map-grid"><i /><i /><i /><i /><i /></div>}
                {project.visual === "driver" && <div className="road-mark"><i /><i /></div>}
              </div>
              <div className="project-row-main">
                <div className="project-row-meta"><span>{project.eyebrow}</span><span>{project.category}</span></div>
                <h2>{project.title}</h2>
                <p className="project-summary">{project.summary}</p>
                <ul className="project-details">{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                <div className="project-tags">{project.stack.map((tool) => <span key={tool}>{tool}</span>)}</div>
                <div className="project-metrics">{project.metrics.map((metric) => <span key={metric}>{metric}</span>)}</div>
                <div className="project-links"><a href={project.github} target="_blank" rel="noreferrer"><Github size={16} /> Source code <ArrowUpRight size={14} /></a>{project.demo && <a href={project.demo} target="_blank" rel="noreferrer"><ExternalLink size={15} /> Live demo <ArrowUpRight size={14} /></a>}</div>
              </div>
            </article>
          ))}
          {filtered.length === 0 && <div className="empty-state"><span>No matching projects.</span><button onClick={() => { setCategory("All work"); setQuery(""); }}>Clear filters</button></div>}
        </div>
      </section>
    </div>
  );
}
