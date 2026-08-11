import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Multimodal Vision RAG Engine & Distributed AI Search Pipeline",
      date: "July 2026",
      description: "An end-to-end Multimodal GenAI search and document parsing engine combining Large Vision Models (LLaVA / Qwen-VL) and CLIP embeddings for automated visual question answering.",
      highlights: [
        "Optimized retrieval efficiency using hybrid search (Qdrant dense vectors + BM25 keyword matching) with Reciprocal Rank Fusion (RRF, k=60), reducing context retrieval latency by 42% to 38.4ms.",
        "Implemented sub-5ms LRU/Redis query vector caching and streaming response endpoints via FastAPI WebSockets to maintain sub-200ms time-to-first-token (TTFT).",
        "Engineered a distributed asynchronous task queue using Celery, Redis, and PyMuPDF to handle concurrent multi-page document processing, reducing ingestion pipeline time by 38%."
      ],
      tech: ["Python", "PyTorch", "vLLM", "Qdrant", "FastAPI", "Next.js", "Redis", "Celery"],
      link: "https://github.com/saisasidharpaluri",
      github: "https://github.com/saisasidharpaluri",
      color: "from-blue-600 to-cyan-500"
    },
    {
      title: "High-Throughput AI Inference & Quantization Engine",
      date: "Aug 2026",
      description: "A high-performance C++/Python AI model serving framework leveraging TensorRT and ONNX IR to deploy quantized deep learning models (INT8/FP16) with 3.2× lower latency (80ms → 25ms).",
      highlights: [
        "Architected thread-safe dynamic batching async request queues in C++ and asyncio, boosting GPU compute utilization by 55% and scaling server throughput to 1,200+ requests/sec.",
        "Developed page-locked CUDA memory pools (cudaMallocHost) and IPC mechanisms to eliminate page-fault overhead, achieving ultra-low latency Host-to-Device data transfers.",
        "Designed FastAPI REST and gRPC binary RPC serving gateways equipped with live telemetry APIs (/v1/models/stats), health probes, and containerized Docker orchestration."
      ],
      tech: ["C++", "Python", "TensorRT", "CUDA", "FastAPI", "gRPC", "Docker", "ONNX"],
      link: "https://github.com/saisasidharpaluri",
      github: "https://github.com/saisasidharpaluri",
      color: "from-purple-600 to-indigo-600"
    },
    {
      title: "NetHunter: Network Vulnerability Scanner",
      date: "Dec 2025",
      description: "Engineered a production-grade network reconnaissance tool using Python and Nmap library to automate host discovery, port scanning, and service versioning.",
      highlights: [
        "Architected full-stack dashboard with Next.js 15 and FastAPI, integrating real-time scan progress visualization and centralized SQLite database.",
        "Implemented automated CVE lookup logic to transform raw port scan output into actionable vulnerability intelligence."
      ],
      tech: ["Python", "FastAPI", "Next.js", "Nmap", "SQLite"],
      link: "https://github.com/saisasidharpaluri/network_vulnerability_scanner-nethunter",
      github: "https://github.com/saisasidharpaluri/network_vulnerability_scanner-nethunter",
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "AI-Powered Phishing & Spam Detection Engine",
      date: "Nov 2025 - Dec 2025",
      description: "Developed an intelligent classification system to detect malicious phishing attempts and spam emails using NLP techniques like Tokenization and TF-IDF.",
      highlights: [
        "Trained Machine Learning models (Naive Bayes, SVM, Random Forest) achieving 98%+ accuracy.",
        "Integrated a real-time web interface using Flask for interactive user verification of suspicious content."
      ],
      tech: ["Python", "Scikit-Learn", "NLP", "Flask", "ML"],
      link: "https://github.com/saisasidharpaluri/AI-powered_phishing_and_spam_detection_engine",
      github: "https://github.com/saisasidharpaluri/AI-powered_phishing_and_spam_detection_engine",
      color: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A showcase of high-performance AI inference systems, multimodal RAG search engines, and full-stack applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-blue-500/30 transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col h-full transform">
            {/* Project Gradient Banner */}
            <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
            
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors leading-snug">{project.title}</h3>
                <div className="flex gap-3 shrink-0 ml-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="GitHub Repo">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>

              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-4 block">{project.date}</span>

              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                {project.description}
              </p>

              <ul className="list-disc list-inside space-y-1.5 text-xs text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-1">
                {project.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2.5 py-0.5 text-xs font-semibold bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link}
                  target="_blank" rel="noopener noreferrer" 
                  className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 group-hover:translate-x-1 transition-transform"
                >
                  View Code & Details <span className="ml-1">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
