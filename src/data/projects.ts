export type Project = {
  id: string;
  title: string;
  eyebrow: string;
  category: string;
  date: string;
  summary: string;
  details: string[];
  stack: string[];
  metrics: string[];
  github: string;
  demo?: string;
  visual: string;
};

export const projects: Project[] = [
  {
    id: "sentinel-pay",
    title: "Sentinel Pay",
    eyebrow: "Agent safety · September 2026",
    category: "AI & Product",
    date: "September 2026",
    summary: "A safety control plane for agent-initiated payments, with deterministic policy checks between intent parsing and simulated settlement.",
    details: [
      "Turns natural-language payment requests into structured intents, then checks recipient, amount, rolling spend, request velocity, and adversarial instructions.",
      "Routes each request to a simulated settlement, human review, or block. Parsing can fall back to a deterministic local path.",
      "Decision traces show the extracted intent and the policy checks behind each outcome.",
    ],
    stack: ["TypeScript", "Next.js", "Vercel AI SDK", "Vercel AI Gateway"],
    metrics: ["Deterministic guardrails", "Human review flow", "Simulated settlement"],
    github: "https://github.com/saisasidharpaluri/sentinal-pay",
    demo: "https://sentinal-pay-taupe.vercel.app",
    visual: "sentinel",
  },
  {
    id: "triton-rt-engine",
    title: "Triton Real-Time Engine",
    eyebrow: "Inference systems · August 2026",
    category: "Inference & Systems",
    date: "August 2026",
    summary: "A model-serving framework that combines quantized TensorRT execution, dynamic request batching, and REST/gRPC gateways.",
    details: [
      "Built a C++ and Python inference path for INT8 and FP16 models, with asynchronous execution and thread-safe batch queues.",
      "Added pinned CUDA host-memory pools and IPC mechanisms to reduce transfer overhead.",
      "Benchmarks compare latency, throughput, GPU memory use, and model similarity across precision modes.",
    ],
    stack: ["C++", "Python", "TensorRT", "CUDA", "Triton", "gRPC", "Docker"],
    metrics: ["1,200+ req/s benchmark", "55% higher GPU utilization", "80 ms → 25 ms latency"],
    github: "https://github.com/saisasidharpaluri/triton-rt-engine",
    visual: "triton",
  },
  {
    id: "vision-rag-engine",
    title: "Multimodal Vision RAG Engine",
    eyebrow: "Search & multimodal AI · July 2026",
    category: "AI & Search",
    date: "July 2026",
    summary: "A multimodal retrieval pipeline for searching across documents and images, then streaming grounded answers from a vision-language model.",
    details: [
      "Combines CLIP visual and text embeddings with BM25 keyword search using reciprocal rank fusion.",
      "Ingests multi-page PDFs and images, with Qdrant indexing and optional Celery/Redis background processing.",
      "Streams answers over WebSockets and reports retrieval and generation timing in the dashboard.",
    ],
    stack: ["Python", "PyTorch", "CLIP", "Qdrant", "FastAPI", "vLLM", "Next.js"],
    metrics: ["38.4 ms retrieval", "184 ms TTFT benchmark", "98.5% MRR reported"],
    github: "https://github.com/saisasidharpaluri/vision-rag-engine",
    visual: "vision",
  },
  {
    id: "georisk-spark",
    title: "GeoRisk-Spark",
    eyebrow: "Geospatial analytics · October 2026",
    category: "Data & Geospatial",
    date: "October 2026",
    summary: "A four-person big-data project that processes synthetic vessel telemetry and marine hazard alerts into risk-aware route comparisons.",
    details: [
      "Processes local event replay with H3 spatial indexing and hazard matching, then writes analytics to Parquet.",
      "Includes risk and density outputs, demonstration delay estimates, route comparisons, and a Streamlit dashboard.",
      "Spark and MLlib support are available locally; cloud resources have not been deployed.",
    ],
    stack: ["Python", "PySpark", "H3", "PyArrow", "Parquet", "Streamlit"],
    metrics: ["Team project", "Local-first pipeline", "Risk-aware routing"],
    github: "https://github.com/saisasidharpaluri/GeoRisk-BDA-Project",
    visual: "georisk",
  },
  {
    id: "driver-assistance",
    title: "AI Driver Assistance System",
    eyebrow: "Edge computer vision · Applied AI",
    category: "Applied AI",
    date: "Project",
    summary: "An edge-oriented driver and road monitoring prototype combining drowsiness cues, lane analysis, and traffic-sign recognition.",
    details: [
      "Combines eye and mouth aspect ratios, head-down detection, traffic-sign recognition, and lane-curvature analysis.",
      "Includes an integrated dashboard with visual overlays and audio alerts, with Raspberry Pi 5 as the target platform.",
      "Traffic-sign classification uses a MobileNetV2 model converted to TensorFlow Lite for edge inference.",
    ],
    stack: ["Python", "OpenCV", "TensorFlow Lite", "Raspberry Pi", "Computer Vision"],
    metrics: ["Driver monitoring", "Traffic-sign recognition", "Edge deployment target"],
    github: "https://github.com/saisasidharpaluri/ai_driver_assistance_system",
    visual: "driver",
  },
];
