import { TechIcon } from "@/components/TechIcons";
import { FolderGit2, ExternalLink, Sparkles, Zap, Cpu, ShieldCheck } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Multimodal Vision RAG Engine & Distributed AI Search Pipeline",
      date: "July 2026",
      category: "GenAI & Multimodal Search",
      description: "An end-to-end Multimodal GenAI search and document parsing engine combining Large Vision Models (LLaVA / Qwen-VL) and CLIP embeddings for automated visual question answering.",
      metrics: ["⚡ 38.4ms Retrieval Latency", "🚀 Sub-200ms TTFT", "📉 42% Latency Cut"],
      highlights: [
        "Optimized retrieval efficiency using hybrid search (Qdrant dense vectors + BM25 keyword matching) with Reciprocal Rank Fusion (RRF, k=60), reducing context retrieval latency by 42% to 38.4ms.",
        "Implemented sub-5ms LRU/Redis query vector caching and streaming response endpoints via FastAPI WebSockets to maintain sub-200ms time-to-first-token (TTFT).",
        "Engineered a distributed asynchronous task queue using Celery, Redis, and PyMuPDF to handle concurrent multi-page document processing, reducing ingestion pipeline time by 38%."
      ],
      tech: ["Python", "PyTorch", "vLLM", "Qdrant", "FastAPI", "Next.js", "Redis"],
      github: "https://github.com/saisasidharpaluri",
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      title: "High-Throughput AI Inference & Quantization Engine",
      date: "Aug 2026",
      category: "AI Infrastructure & C++",
      description: "A high-performance C++/Python AI model serving framework leveraging TensorRT and ONNX IR to deploy quantized deep learning models (INT8/FP16) with 3.2× lower latency (80ms → 25ms).",
      metrics: ["⚡ 25ms Latency (INT8/FP16)", "🚀 1,200+ Requests/Sec", "📈 +55% GPU Compute"],
      highlights: [
        "Architected thread-safe dynamic batching async request queues in C++ and asyncio, boosting GPU compute utilization by 55% and scaling server throughput to 1,200+ requests/sec.",
        "Developed page-locked CUDA memory pools (cudaMallocHost) and IPC mechanisms to eliminate page-fault overhead, achieving ultra-low latency Host-to-Device data transfers.",
        "Designed FastAPI REST and gRPC binary RPC serving gateways equipped with live telemetry APIs (/v1/models/stats), health probes, and containerized Docker orchestration."
      ],
      tech: ["C++", "Python", "TensorRT", "CUDA", "FastAPI", "gRPC", "Docker"],
      github: "https://github.com/saisasidharpaluri",
      gradient: "from-purple-600 to-indigo-600"
    },
    {
      title: "NetHunter: Network Vulnerability Scanner",
      date: "Dec 2025",
      category: "Cybersecurity & Full-Stack",
      description: "Engineered a production-grade network reconnaissance tool using Python and Nmap library to automate host discovery, port scanning, and service versioning.",
      metrics: ["🔍 Automated Port Scan", "🛡️ Real-Time CVE Lookup", "📊 Live Dashboard"],
      highlights: [
        "Architected full-stack dashboard with Next.js 15 and FastAPI, integrating real-time scan progress visualization and centralized SQLite database.",
        "Implemented automated CVE lookup logic to transform raw port scan output into actionable vulnerability intelligence."
      ],
      tech: ["Python", "FastAPI", "Next.js", "Linux CLI", "PostgreSQL"],
      github: "https://github.com/saisasidharpaluri/network_vulnerability_scanner-nethunter",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      title: "AI-Powered Phishing & Spam Detection Engine",
      date: "Nov 2025 - Dec 2025",
      category: "Machine Learning & NLP",
      description: "Developed an intelligent classification system to detect malicious phishing attempts and spam emails using NLP techniques like Tokenization and TF-IDF.",
      metrics: ["🎯 98%+ Accuracy", "🧠 Naive Bayes / SVM", "⚡ Real-time Flask API"],
      highlights: [
        "Trained Machine Learning models (Naive Bayes, SVM, Random Forest) achieving 98%+ accuracy.",
        "Integrated a real-time web interface using Flask for interactive user verification of suspicious content."
      ],
      tech: ["Python", "FastAPI", "Next.js"],
      github: "https://github.com/saisasidharpaluri/AI-powered_phishing_and_spam_detection_engine",
      gradient: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs font-bold tracking-wider uppercase rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300 border border-blue-200/60 dark:border-cyan-500/30">
          <FolderGit2 className="w-3.5 h-3.5" /> Featured Engineering Projects
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight text-gray-900 dark:text-white">
          Architecting High-Performance <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500">AI Systems</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A showcase of TensorRT inference optimization, Multimodal GenAI search engines, dynamic batching inference servers, and full-stack platforms.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group glass-card rounded-3xl overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-200/70 dark:border-gray-800/80"
          >
            {/* Top Gradient Accent */}
            <div className={`h-2.5 bg-gradient-to-r ${project.gradient}`} />
            
            <div className="p-7 sm:p-8 flex-1 flex flex-col">
              
              {/* Header: Title & GitHub Link */}
              <div className="flex justify-between items-start gap-4 mb-3">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400 mb-1 block">
                    {project.category} • {project.date}
                  </span>
                  <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors leading-tight">
                    {project.title}
                  </h3>
                </div>

                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2.5 rounded-xl glass-card text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:scale-110 transition-all shrink-0" 
                  aria-label="GitHub Repository"
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
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-cyan-400 hover:underline"
                >
                  View Code &rarr;
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
