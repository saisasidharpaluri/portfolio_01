"use client";

import { useState } from "react";
import { TechIcon } from "@/components/TechIcons";
import { FolderGit2, ExternalLink, Search, Sparkles, Filter, Code2, ShieldAlert, Cpu } from "lucide-react";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const projects = [
    {
      id: "vision-rag-engine",
      title: "Multimodal Vision RAG Engine & Search Pipeline",
      repoName: "vision-rag-engine",
      date: "July 2026",
      category: "AI & GenAI",
      description: "End-to-end Multimodal GenAI pipeline combining Large Vision Models (LLaVA / Qwen-VL) and CLIP embeddings for automated visual QA and document parsing.",
      metrics: ["⚡ 38.4ms Retrieval Latency", "🚀 Sub-200ms TTFT", "📉 42% Latency Cut"],
      highlights: [
        "Optimized retrieval efficiency using hybrid search (Qdrant dense vectors + BM25 keyword matching) with Reciprocal Rank Fusion (RRF, k=60), reducing context retrieval latency by 42% to 38.4ms.",
        "Implemented sub-5ms LRU/Redis query vector caching and streaming response endpoints via FastAPI WebSockets to maintain sub-200ms time-to-first-token (TTFT).",
        "Engineered a distributed asynchronous task queue using Celery, Redis, and PyMuPDF to handle concurrent multi-page document processing, reducing ingestion time by 38%."
      ],
      tech: ["Python", "PyTorch", "vLLM", "Qdrant", "FastAPI", "Next.js", "Redis"],
      github: "https://github.com/saisasidharpaluri/vision-rag-engine",
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      id: "triton-rt-engine",
      title: "Triton & TensorRT GPU Inference Acceleration Engine",
      repoName: "triton-rt-engine",
      date: "Aug 2026",
      category: "Systems & Infra",
      description: "Production deep learning serving framework deploying quantized ONNX models (INT8/FP16) on NVIDIA Triton Inference Server and TensorRT execution contexts.",
      metrics: ["⚡ 68% Latency Reduction", "🎯 95% Accuracy Retained", "🤖 Jetson & Triton"],
      highlights: [
        "Built custom TensorRT inference pipeline to compile and execute YOLOv8 models, programmatically managing GPU memory allocation and asynchronous execution contexts.",
        "Integrated Triton Inference Server dynamic batching queues to boost GPU compute utilization and streamline hardware-accelerated model serving.",
        "Developed Docker containerized deployment pipelines targeting industrial edge devices and cloud GPU servers."
      ],
      tech: ["Python", "TensorRT", "CUDA", "Docker", "FastAPI", "gRPC"],
      github: "https://github.com/saisasidharpaluri/triton-rt-engine",
      gradient: "from-purple-600 to-indigo-600"
    },
    {
      id: "nexus-engine",
      title: "High-Throughput Dynamic Batching Inference Engine",
      repoName: "nexus-engine",
      date: "July 2026",
      category: "Systems & Infra",
      description: "High-performance C++/Python async model serving engine with page-locked CUDA memory pools and low-latency IPC for high-concurrency request processing.",
      metrics: ["🚀 1,200+ Requests/Sec", "📈 +55% GPU Utilization", "⚡ 25ms INT8 Latency"],
      highlights: [
        "Architected thread-safe dynamic batching async request queues in C++ and asyncio, boosting GPU compute utilization by 55% and scaling throughput to 1,200+ req/sec.",
        "Developed page-locked CUDA memory pools (cudaMallocHost) and IPC mechanisms to eliminate page-fault overhead for ultra-low latency Host-to-Device transfers.",
        "Constructed live telemetry APIs (/v1/models/stats), health probes, and gRPC binary RPC serving gateways."
      ],
      tech: ["C++", "Python", "CUDA", "gRPC", "FastAPI", "Docker", "ONNX"],
      github: "https://github.com/saisasidharpaluri/nexus-engine",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      id: "inspectX-NextGenHacks",
      title: "InspectX: AI Code Audit & Vulnerability Platform",
      repoName: "inspectX-NextGenHacks",
      date: "June 2026",
      category: "Security & Web",
      description: "NextGenHacks hackathon project featuring automated code vulnerability inspection, real-time security score calculation, and full-stack interactive dashboard.",
      metrics: ["🛡️ Automated Security Audit", "⚡ Real-Time Parsing", "📊 Hackathon Featured"],
      highlights: [
        "Engineered full-stack audit dashboard with Next.js and TypeScript, visualizing repository security alerts and severity scores.",
        "Implemented real-time static code analysis pipelines identifying security smells, hardcoded credentials, and unsafe dependencies.",
        "Designed clean REST APIs and interactive report export tools for developer security compliance."
      ],
      tech: ["TypeScript", "Next.js", "Python", "FastAPI", "PostgreSQL"],
      github: "https://github.com/saisasidharpaluri/inspectX-NextGenHacks",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      id: "network-vulnerability-scanner",
      title: "NetHunter: Network Vulnerability Scanner",
      repoName: "network_vulnerability_scanner-nethunter",
      date: "Dec 2025",
      category: "Security & Web",
      description: "Production-grade network reconnaissance tool automating host discovery, open port scanning, and CVE vulnerability intelligence reporting.",
      metrics: ["🔍 Nmap Port Automation", "🛡️ Real-Time CVE Lookup", "📊 Interactive Dashboard"],
      highlights: [
        "Architected full-stack dashboard with Next.js 15 and FastAPI, integrating real-time scan progress visualization and centralized SQLite database.",
        "Implemented automated CVE lookup logic to transform raw Nmap scanning output into actionable security insights."
      ],
      tech: ["Python", "FastAPI", "Next.js", "Linux CLI", "SQLite"],
      github: "https://github.com/saisasidharpaluri/network_vulnerability_scanner-nethunter",
      gradient: "from-sky-500 to-indigo-600"
    },
    {
      id: "phishing-spam-detector",
      title: "AI Phishing & Spam Detection Engine",
      repoName: "AI-powered_phishing_and_spam_detection_engine",
      date: "Dec 2025",
      category: "AI & GenAI",
      description: "NLP classification system using Tokenization, TF-IDF vectorization, and Machine Learning models to detect malicious phishing and spam content.",
      metrics: ["🎯 98%+ Accuracy", "🧠 Naive Bayes / SVM", "⚡ Flask Real-Time API"],
      highlights: [
        "Trained Machine Learning classification models (Naive Bayes, Support Vector Machines, Random Forest) achieving 98%+ accuracy.",
        "Integrated a real-time web verification interface using Flask for interactive email and URL content verification."
      ],
      tech: ["Python", "Scikit-Learn", "Flask"],
      github: "https://github.com/saisasidharpaluri/AI-powered_phishing_and_spam_detection_engine",
      gradient: "from-amber-500 to-orange-600"
    }
  ];

  const categories = ["All", "AI & GenAI", "Systems & Infra", "Security & Web"];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs font-bold tracking-wider uppercase rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300 border border-blue-200/60 dark:border-cyan-500/30">
          <FolderGit2 className="w-3.5 h-3.5" /> Official GitHub Repositories
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight text-gray-900 dark:text-white">
          Architecting High-Performance <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500">AI & Systems</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore my open-source projects featuring TensorRT optimization, Triton model serving, Multimodal GenAI RAG, and Security platforms.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="max-w-4xl mx-auto mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl glass-card w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/20"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text"
            placeholder="Search by tech or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl glass-card text-xs font-medium text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border-transparent transition-colors"
          />
        </div>

      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group glass-card rounded-3xl overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-200/70 dark:border-gray-800/80"
            >
              {/* Top Gradient Accent */}
              <div className={`h-2.5 bg-gradient-to-r ${project.gradient}`} />
              
              <div className="p-7 sm:p-8 flex-1 flex flex-col">
                
                {/* Header: Title & GitHub Link */}
                <div className="flex justify-between items-start gap-4 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
                        {project.category}
                      </span>
                      <span className="text-gray-400 dark:text-gray-600">•</span>
                      <span className="text-[11px] font-semibold text-gray-500 dark:text-gray-400">
                        {project.date}
                      </span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2.5 rounded-xl glass-card text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:scale-110 transition-all shrink-0" 
                    aria-label={`GitHub Repository for ${project.title}`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                {/* Metric Highlights Pills */}
                <div className="flex flex-wrap gap-2 my-3">
                  {project.metrics.map((m, i) => (
                    <span key={i} className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-gray-100 dark:bg-gray-800/80 text-gray-800 dark:text-gray-200 border border-gray-200/60 dark:border-gray-700/50">
                      {m}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Bullet Highlights */}
                <ul className="space-y-2 text-xs text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-1">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Badges */}
                <div className="pt-4 border-t border-gray-200/60 dark:border-gray-800/60 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <div key={t} className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg bg-blue-50/70 dark:bg-blue-950/40 text-blue-700 dark:text-cyan-300 border border-blue-200/40 dark:border-cyan-900/40">
                        <TechIcon name={t} className="w-3.5 h-3.5" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>

                  <a 
                    href={project.github}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-900 dark:bg-gray-800 text-white text-xs font-bold hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors shadow-sm"
                  >
                    <TechIcon name="github" className="w-3.5 h-3.5" />
                    <span>View Repo</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="glass-card p-12 rounded-3xl text-center max-w-lg mx-auto">
          <p className="text-gray-500 dark:text-gray-400 font-semibold mb-2">No projects found matching "{searchQuery}"</p>
          <button 
            onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
            className="text-xs font-bold text-blue-600 dark:text-cyan-400 hover:underline"
          >
            Clear Filters
          </button>
        </div>
      )}

    </div>
  );
}
