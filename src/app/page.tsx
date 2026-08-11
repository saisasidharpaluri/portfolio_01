import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-80px)]">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col md:flex-row items-center justify-center py-20 gap-12">
        <div className="flex-1 max-w-xl text-center md:text-left">
          <div className="inline-block px-3 py-1 mb-4 text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
            Available for work
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-gray-900 dark:text-white">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Paluri Sai Sasidhar</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Computer Science student at IIITM Gwalior specializing in AI/ML & Systems Engineering, GenAI RAG Pipelines, TensorRT inference optimization, and high-performance full-stack architectures.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link 
              href="/projects" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-blue-500/30 text-center"
            >
              View My Work
            </Link>
            <Link 
              href="/resume" 
              className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 font-bold py-3 px-8 rounded-full transition-all duration-300 text-center"
            >
              Check Resume
            </Link>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rotate-3 hover:rotate-0 transition-transform duration-300">
                <Image 
                  src="/my_photo_2.jpeg" 
                  alt="Profile Photo" 
                  fill 
                  className="object-cover" 
                  priority
                />
            </div>
        </div>
      </section>

      {/* Featured Skills Snippet */}
      <section className="py-16 border-t border-gray-100 dark:border-gray-800">
        <h2 className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Tech Stack & Core Capabilities</h2>
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-80 hover:opacity-100 transition-all duration-500">
           <span className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-semibold hover:scale-105 transform transition-transform duration-200 cursor-default">PyTorch & vLLM</span>
           <span className="px-4 py-2 bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full font-semibold hover:scale-105 transform transition-transform duration-200 cursor-default">TensorRT & CUDA</span>
           <span className="px-4 py-2 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full font-semibold hover:scale-105 transform transition-transform duration-200 cursor-default">Python & C++</span>
           <span className="px-4 py-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full font-semibold hover:scale-105 transform transition-transform duration-200 cursor-default">FastAPI & Next.js</span>
           <span className="px-4 py-2 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full font-semibold hover:scale-105 transform transition-transform duration-200 cursor-default">Docker & gRPC</span>
        </div>
      </section>
    </div>
  );
}
