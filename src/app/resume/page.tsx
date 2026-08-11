export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Resume</h1>
        <a 
          href="/resume.pdf" 
          download 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download PDF
        </a>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 border border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="border-b border-gray-200 dark:border-gray-700 pb-6 mb-6">
          <h2 className="text-3xl font-bold mb-2">Paluri Sai Sasidhar</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-3 font-medium">B.Tech Computer Science & Engineering | IIITM Gwalior</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
            <span>📞 9494929237</span>
            <span>📧 <a href="mailto:palurisaisasidhar@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 underline">palurisaisasidhar@gmail.com</a></span>
            <span>🔗 <a href="https://www.linkedin.com/in/sai-sasidhar-paluri-896b43289/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 underline">LinkedIn</a></span>
            <span>🐙 <a href="https://github.com/saisasidharpaluri" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 underline">GitHub</a></span>
            <span>⚡ <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 underline">LeetCode (1650)</a></span>
            <span>⭐ <a href="https://codechef.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 underline">CodeChef (1760)</a></span>
          </div>
        </div>

        {/* Education */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400 uppercase tracking-wide border-b pb-1 border-blue-100 dark:border-blue-900/40">Education</h3>
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between items-baseline mb-1">
              <h4 className="text-lg font-bold">Indian Institute of Information Technology & Management, Gwalior</h4>
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">June 2023 – Expected May 2027</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-2 font-medium">Pursuing B.Tech in Computer Science and Engineering | Gwalior, Madhya Pradesh</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Relevant Coursework:</span> Data Structures & Algorithms, Operating Systems, Database Management (DBMS), Computer Networks, Object-Oriented Programming, Cryptography & Network Security, Software Engineering, Design and Analysis of Algorithms.
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400 uppercase tracking-wide border-b pb-1 border-blue-100 dark:border-blue-900/40">Experience</h3>
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between items-baseline mb-1">
              <h4 className="text-lg font-bold">Tecdatum Infoservices Pvt. Ltd.</h4>
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">May 2026 – July 2026</span>
            </div>
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3">AI Intern | Hyderabad, Telangana</p>
            <ul className="list-disc list-outside ml-5 text-gray-700 dark:text-gray-300 text-sm space-y-2 leading-relaxed">
              <li><span className="font-semibold">Edge AI & ANPR System:</span> Engineered a modular Python-based software architecture and Docker-based containerized deployment pipeline for an Automatic Number Plate Recognition (ANPR) system targeting industrial edge devices (NVIDIA Jetson Nano).</li>
              <li><span className="font-semibold">Hardware-Accelerated Interface:</span> Built a custom TensorRT inference pipeline to compile and execute YOLOv8 models, programmatically managing GPU memory allocation and asynchronous execution contexts to reduce latency by 68% while maintaining 95% accuracy.</li>
              <li><span className="font-semibold">Escape Route Optimization:</span> Designed a geospatial routing engine using OSMnx and NetworkX to model complex street grids; optimized pathfinding efficiency by developing a custom pruned Dijkstra algorithm that truncated search branches using spatial coordinates.</li>
            </ul>
          </div>
        </div>

        {/* Projects */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400 uppercase tracking-wide border-b pb-1 border-blue-100 dark:border-blue-900/40">Projects</h3>
          
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:justify-between items-baseline mb-1">
              <h4 className="text-lg font-bold">Multimodal Vision RAG Engine & Distributed AI Search Pipeline</h4>
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">July 2026</span>
            </div>
            <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">Python, PyTorch, vLLM, Qdrant, FastAPI, Next.js, Celery, Redis, PyMuPDF</p>
            <ul className="list-disc list-outside ml-5 text-gray-700 dark:text-gray-300 text-sm space-y-1.5 leading-relaxed">
              <li>Developed an end-to-end Multimodal GenAI pipeline combining Large Vision Models (LLaVA / Qwen-VL) and CLIP embeddings to perform automated visual question answering and multi-page document parsing.</li>
              <li>Optimized retrieval efficiency by designing a hybrid search engine (Qdrant dense vectors + BM25 keyword matching) using Reciprocal Rank Fusion (RRF, k=60), reducing context retrieval latency by 42% to 38.4ms.</li>
              <li>Implemented sub-5ms LRU/Redis query vector caching and streaming response endpoints via FastAPI WebSockets to maintain sub-200ms time-to-first-token (TTFT) for client applications.</li>
              <li>Engineered a distributed asynchronous task queue using Celery, Redis, and PyMuPDF to handle concurrent multi-page document processing, reducing end-to-end ingestion pipeline time by 38%.</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:justify-between items-baseline mb-1">
              <h4 className="text-lg font-bold">High-Throughput AI Inference & Quantization Engine</h4>
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">Aug 2026</span>
            </div>
            <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">C++, Python, TensorRT, CUDA, FastAPI, gRPC, Docker, ONNX</p>
            <ul className="list-disc list-outside ml-5 text-gray-700 dark:text-gray-300 text-sm space-y-1.5 leading-relaxed">
              <li>Engineered a high-performance C++/Python AI model serving framework leveraging TensorRT and ONNX IR to deploy quantized deep learning models (INT8/FP16) with 3.2× lower latency (80ms → 25ms).</li>
              <li>Architected thread-safe dynamic batching async request queues in C++ and asyncio, boosting GPU compute utilization by 55% and scaling server throughput to 1,200+ requests/sec.</li>
              <li>Developed page-locked CUDA memory pools (cudaMallocHost) and IPC mechanisms to eliminate page-fault overhead, achieving ultra-low latency Host-to-Device data transfers.</li>
              <li>Constructed automated benchmark & evaluation pipelines measuring throughput (RPS), VRAM consumption, cosine similarity, and perplexity across model checkpoints.</li>
              <li>Designed FastAPI REST and gRPC binary RPC serving gateways equipped with live telemetry APIs (/v1/models/stats), health probes, and containerized Docker orchestration.</li>
            </ul>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400 uppercase tracking-wide border-b pb-1 border-blue-100 dark:border-blue-900/40">Technical Skills</h3>
          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p><span className="font-bold text-gray-900 dark:text-gray-100">AI/ML & GenAI:</span> PyTorch, TensorFlow, HuggingFace, LLMs, LVMs, TensorRT, vLLM, RAG Pipelines, Model Quantization</p>
            <p><span className="font-bold text-gray-900 dark:text-gray-100">Languages:</span> Python, C/C++, JavaScript(ES6+), SQL, Java</p>
            <p><span className="font-bold text-gray-900 dark:text-gray-100">ML Infra & Systems:</span> CUDA (Basics), Docker, Triton Inference Server, gRPC, Multiprocessing, Linux CLI</p>
            <p><span className="font-bold text-gray-900 dark:text-gray-100">Frameworks & Databases:</span> FastAPI, Flask, Next.js, PostgreSQL, Redis, SQLite, RESTful API Design</p>
            <p><span className="font-bold text-gray-900 dark:text-gray-100">Developer Tools:</span> Git/GitHub, TensorBoard, Model Evaluation & Benchmarking Tools</p>
          </div>
        </div>

        {/* Achievements / Certifications */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400 uppercase tracking-wide border-b pb-1 border-blue-100 dark:border-blue-900/40">Achievements / Certifications</h3>
          <ul className="list-disc list-outside ml-5 text-gray-700 dark:text-gray-300 text-sm space-y-1.5 leading-relaxed">
            <li>Active competitive programmer with peak rating of <span className="font-semibold text-gray-900 dark:text-gray-100">1760 on CodeChef</span> and <span className="font-semibold text-gray-900 dark:text-gray-100">1650 on LeetCode</span>.</li>
            <li>Achieved an <span className="font-semibold text-gray-900 dark:text-gray-100">All India Rank (AIR) of 8741 in JEE Mains 2023</span> (Top 0.8% out of 1.2M+ candidates).</li>
            <li>Earned Google Cybersecurity Professional Certificate and IBM Cybersecurity Fundamentals.</li>
          </ul>
        </div>

        {/* Leadership / Extracurricular */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400 uppercase tracking-wide border-b pb-1 border-blue-100 dark:border-blue-900/40">Leadership / Extracurricular</h3>
          <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
            <div>
              <h4 className="font-bold text-gray-900 dark:text-gray-100">Student Activity Council (Cultural) & Sports</h4>
              <ul className="list-disc list-outside ml-5 space-y-1 mt-1">
                <li><span className="font-semibold">Event Management:</span> Coordinated the IPL Auction and Pictionary events for Aurora (annual cultural fest) and spearheaded 10+ Orientation Week events, improving student satisfaction scores by 15%.</li>
                <li><span className="font-semibold">Athletics:</span> Black Belt in Karate with 9+ years of training and 30+ tournament appearances (Gold/Silver/Bronze medalist); trained competitive swimmer.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
