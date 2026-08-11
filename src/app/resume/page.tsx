import { Download, Mail, Phone, MapPin, ExternalLink, Award, Briefcase, GraduationCap, Code, Trophy } from "lucide-react";
import { TechIcon } from "@/components/TechIcons";

export default function Resume() {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4 sm:px-6">
      
      {/* Top Header & Download Button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Resume</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Paluri Sai Sasidhar — Curriculum Vitae</p>
        </div>

        <a 
          href="/resume.pdf" 
          download 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-3 px-6 rounded-2xl transition-all duration-300 shadow-md shadow-blue-500/20 hover:scale-105"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </a>
      </div>

      {/* Resume Glass Document Card */}
      <div className="glass-card rounded-3xl p-6 sm:p-10 border border-gray-200/70 dark:border-gray-800/80 shadow-xl">
        
        {/* Document Header */}
        <div className="border-b border-gray-200/60 dark:border-gray-800/60 pb-8 mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-1">Paluri Sai Sasidhar</h2>
          <p className="text-base sm:text-lg font-semibold text-blue-600 dark:text-cyan-400 mb-4">
            Computer Science & Engineering Student | AI/ML & Systems Specialist
          </p>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-blue-500" /> Gwalior, MP, India</span>
            <a href="tel:+919494929237" className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-cyan-400"><Phone className="w-4 h-4 text-emerald-500" /> +91 9494929237</a>
            <a href="mailto:palurisaisasidhar@gmail.com" className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-cyan-400"><Mail className="w-4 h-4 text-cyan-500" /> palurisaisasidhar@gmail.com</a>
            <a href="https://www.linkedin.com/in/sai-sasidhar-paluri-896b43289/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-cyan-400"><TechIcon name="linkedin" className="w-4 h-4 text-blue-600" /> LinkedIn</a>
            <a href="https://github.com/saisasidharpaluri" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-cyan-400"><TechIcon name="github" className="w-4 h-4 text-purple-500" /> GitHub</a>
          </div>
        </div>

        {/* Education */}
        <div className="mb-10">
          <h3 className="text-lg font-extrabold uppercase tracking-wider text-blue-600 dark:text-cyan-400 mb-4 flex items-center gap-2 border-b border-gray-200/60 dark:border-gray-800/60 pb-2">
            <GraduationCap className="w-5 h-5" /> Education
          </h3>
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between items-baseline mb-1">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">Indian Institute of Information Technology & Management, Gwalior</h4>
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">June 2023 – Expected May 2027</span>
            </div>
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Pursuing B.Tech in Computer Science and Engineering | Gwalior, Madhya Pradesh</p>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              <strong className="text-gray-900 dark:text-white">Relevant Coursework:</strong> Data Structures & Algorithms, Operating Systems, Database Management (DBMS), Computer Networks, Object-Oriented Programming, Cryptography & Network Security, Software Engineering, Design and Analysis of Algorithms.
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-10">
          <h3 className="text-lg font-extrabold uppercase tracking-wider text-blue-600 dark:text-cyan-400 mb-4 flex items-center gap-2 border-b border-gray-200/60 dark:border-gray-800/60 pb-2">
            <Briefcase className="w-5 h-5" /> Work Experience
          </h3>
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between items-baseline mb-1">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">Tecdatum Infoservices Pvt. Ltd.</h4>
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">May 2026 – July 2026</span>
            </div>
            <p className="text-xs font-bold text-blue-600 dark:text-cyan-400 mb-3 uppercase tracking-wider">AI Intern | Hyderabad, Telangana</p>
            <ul className="list-disc list-outside ml-4 space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              <li><strong className="text-gray-900 dark:text-white">Edge AI & ANPR System:</strong> Engineered a modular Python-based software architecture and Docker-based containerized deployment pipeline for an Automatic Number Plate Recognition (ANPR) system targeting industrial edge devices (NVIDIA Jetson Nano).</li>
              <li><strong className="text-gray-900 dark:text-white">Hardware-Accelerated Interface:</strong> Built a custom TensorRT inference pipeline to compile and execute YOLOv8 models, programmatically managing GPU memory allocation and asynchronous execution contexts to reduce latency by 68% while maintaining 95% accuracy.</li>
              <li><strong className="text-gray-900 dark:text-white">Escape Route Optimization:</strong> Designed a geospatial routing engine using OSMnx and NetworkX to model complex street grids; optimized pathfinding efficiency by developing a custom pruned Dijkstra algorithm that truncated search branches using spatial coordinates.</li>
            </ul>
          </div>
        </div>

        {/* Projects */}
        <div className="mb-10">
          <h3 className="text-lg font-extrabold uppercase tracking-wider text-blue-600 dark:text-cyan-400 mb-4 flex items-center gap-2 border-b border-gray-200/60 dark:border-gray-800/60 pb-2">
            <Code className="w-5 h-5" /> Flagship Projects
          </h3>
          
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:justify-between items-baseline mb-1">
              <h4 className="text-base font-bold text-gray-900 dark:text-white">Multimodal Vision RAG Engine & Distributed AI Search Pipeline</h4>
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">July 2026</span>
            </div>
            <p className="text-xs font-bold text-blue-600 dark:text-cyan-400 mb-2">Python, PyTorch, vLLM, Qdrant, FastAPI, Next.js, Celery, Redis, PyMuPDF</p>
            <ul className="list-disc list-outside ml-4 space-y-1.5 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              <li>Developed an end-to-end Multimodal GenAI pipeline combining Large Vision Models (LLaVA / Qwen-VL) and CLIP embeddings to perform automated visual question answering and multi-page document parsing.</li>
              <li>Optimized retrieval efficiency by designing a hybrid search engine (Qdrant dense vectors + BM25 keyword matching) using Reciprocal Rank Fusion (RRF, k=60), reducing context retrieval latency by 42% to 38.4ms.</li>
              <li>Implemented sub-5ms LRU/Redis query vector caching and streaming response endpoints via FastAPI WebSockets to maintain sub-200ms time-to-first-token (TTFT) for client applications.</li>
              <li>Engineered a distributed asynchronous task queue using Celery, Redis, and PyMuPDF to handle concurrent multi-page document processing, reducing end-to-end ingestion pipeline time by 38%.</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:justify-between items-baseline mb-1">
              <h4 className="text-base font-bold text-gray-900 dark:text-white">High-Throughput AI Inference & Quantization Engine</h4>
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">Aug 2026</span>
            </div>
            <p className="text-xs font-bold text-blue-600 dark:text-cyan-400 mb-2">C++, Python, TensorRT, CUDA, FastAPI, gRPC, Docker, ONNX</p>
            <ul className="list-disc list-outside ml-4 space-y-1.5 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              <li>Engineered a high-performance C++/Python AI model serving framework leveraging TensorRT and ONNX IR to deploy quantized deep learning models (INT8/FP16) with 3.2× lower latency (80ms → 25ms).</li>
              <li>Architected thread-safe dynamic batching async request queues in C++ and asyncio, boosting GPU compute utilization by 55% and scaling server throughput to 1,200+ requests/sec.</li>
              <li>Developed page-locked CUDA memory pools (cudaMallocHost) and IPC mechanisms to eliminate page-fault overhead, achieving ultra-low latency Host-to-Device data transfers.</li>
              <li>Constructed automated benchmark & evaluation pipelines measuring throughput (RPS), VRAM consumption, cosine similarity, and perplexity across model checkpoints.</li>
              <li>Designed FastAPI REST and gRPC binary RPC serving gateways equipped with live telemetry APIs (/v1/models/stats), health probes, and containerized Docker orchestration.</li>
            </ul>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-10">
          <h3 className="text-lg font-extrabold uppercase tracking-wider text-blue-600 dark:text-cyan-400 mb-4 flex items-center gap-2 border-b border-gray-200/60 dark:border-gray-800/60 pb-2">
            <TechIcon name="python" className="w-5 h-5" /> Technical Skills
          </h3>
          <div className="space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            <p><strong className="text-gray-900 dark:text-white">AI/ML & GenAI:</strong> PyTorch, TensorFlow, HuggingFace, LLMs, LVMs, TensorRT, vLLM, RAG Pipelines, Model Quantization</p>
            <p><strong className="text-gray-900 dark:text-white">Languages:</strong> Python, C/C++, JavaScript(ES6+), SQL, Java</p>
            <p><strong className="text-gray-900 dark:text-white">ML Infra & Systems:</strong> CUDA (Basics), Docker, Triton Inference Server, gRPC, Multiprocessing, Linux CLI</p>
            <p><strong className="text-gray-900 dark:text-white">Frameworks & Databases:</strong> FastAPI, Flask, Next.js, PostgreSQL, Redis, SQLite, RESTful API Design</p>
            <p><strong className="text-gray-900 dark:text-white">Developer Tools:</strong> Git/GitHub, TensorBoard, Model Evaluation & Benchmarking Tools</p>
          </div>
        </div>

        {/* Achievements / Certifications */}
        <div className="mb-10">
          <h3 className="text-lg font-extrabold uppercase tracking-wider text-blue-600 dark:text-cyan-400 mb-4 flex items-center gap-2 border-b border-gray-200/60 dark:border-gray-800/60 pb-2">
            <Award className="w-5 h-5" /> Achievements & Certifications
          </h3>
          <ul className="list-disc list-outside ml-4 text-xs sm:text-sm text-gray-600 dark:text-gray-300 space-y-1.5 leading-relaxed">
            <li>Active competitive programmer with peak rating of <strong className="text-gray-900 dark:text-white">1760 on CodeChef</strong> and <strong className="text-gray-900 dark:text-white">1650 on LeetCode</strong>.</li>
            <li>Achieved an <strong className="text-gray-900 dark:text-white">All India Rank (AIR) of 8741 in JEE Mains 2023</strong> (Top 0.8% out of 1.2M+ candidates).</li>
            <li>Earned Google Cybersecurity Professional Certificate and IBM Cybersecurity Fundamentals.</li>
          </ul>
        </div>

        {/* Leadership / Extracurricular */}
        <div>
          <h3 className="text-lg font-extrabold uppercase tracking-wider text-blue-600 dark:text-cyan-400 mb-4 flex items-center gap-2 border-b border-gray-200/60 dark:border-gray-800/60 pb-2">
            <Trophy className="w-5 h-5" /> Leadership / Extracurricular
          </h3>
          <div className="space-y-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white">Student Activity Council (Cultural) & Sports</h4>
              <ul className="list-disc list-outside ml-4 space-y-1 mt-1">
                <li><strong className="text-gray-900 dark:text-white">Event Management:</strong> Coordinated the IPL Auction and Pictionary events for Aurora (annual cultural fest) and spearheaded 10+ Orientation Week events, improving student satisfaction scores by 15%.</li>
                <li><strong className="text-gray-900 dark:text-white">Athletics:</strong> Black Belt in Karate with 9+ years of training and 30+ tournament appearances (Gold/Silver/Bronze medalist); trained competitive swimmer.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
