import Link from "next/link";
import Image from "next/image";
import { TechIcon } from "@/components/TechIcons";
import { ArrowRight, Sparkles, Cpu, Zap, Code, ShieldCheck, Terminal, Brain, Award } from "lucide-react";

export default function Home() {
  const featuredTech = [
    { name: "PyTorch", category: "Deep Learning" },
    { name: "TensorRT", category: "GPU Acceleration" },
    { name: "CUDA", category: "Parallel Computing" },
    { name: "vLLM", category: "GenAI & LLMs" },
    { name: "Python", category: "Core Language" },
    { name: "C++", category: "High Performance" },
    { name: "FastAPI", category: "Async Backends" },
    { name: "Next.js", category: "Full-Stack Web" },
    { name: "Docker", category: "Containerization" },
    { name: "Redis", category: "Vector Caching" },
    { name: "gRPC", category: "Microservices" },
    { name: "Git/GitHub", category: "Version Control" },
  ];

  const metrics = [
    { label: "AIR JEE Mains 2023", value: "8,741", subtext: "Top 0.8% out of 1.2M+", icon: Award, color: "text-amber-500" },
    { label: "TensorRT Latency Cut", value: "68%", subtext: "YOLOv8 Edge Acceleration", icon: Zap, color: "text-cyan-500" },
    { label: "Inference Throughput", value: "1,200+", subtext: "Requests / Sec in C++", icon: Cpu, color: "text-blue-500" },
    { label: "CodeChef / LeetCode", value: "1760 / 1650", subtext: "Peak Competitive Rating", icon: Code, color: "text-purple-500" },
  ];

  return (
    <div className="relative overflow-hidden min-h-[calc(100vh-80px)] pt-12 pb-16 px-4 sm:px-6">
      
      {/* Background Radial Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/15 to-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 pt-8 pb-16">
        
        {/* Left Column: Headline & Info */}
        <div className="flex-1 text-center lg:text-left">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold tracking-wider uppercase rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300 border border-blue-200/60 dark:border-cyan-500/30 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-4" />
            Available for AI/ML & Systems Engineering Roles
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-[1.15] text-gray-900 dark:text-white">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500">Paluri Sai Sasidhar</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
            Computer Science student at <span className="font-semibold text-gray-900 dark:text-white">IIITM Gwalior</span> specializing in <span className="font-semibold text-blue-600 dark:text-cyan-400">Artificial Intelligence</span>, TensorRT inference optimization, Multimodal RAG search pipelines, and high-throughput C++/Python model serving engines.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link 
              href="/projects" 
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-3.5 px-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-blue-500/25 text-base"
            >
              Explore Projects <ArrowRight className="w-4 h-4" />
            </Link>
            
            <Link 
              href="/resume" 
              className="inline-flex items-center justify-center gap-2 glass-card hover:bg-gray-100 dark:hover:bg-gray-800/80 text-gray-900 dark:text-white font-bold py-3.5 px-8 rounded-2xl transition-all duration-300 text-base"
            >
              Check Resume
            </Link>
          </div>
        </div>

        {/* Right Column: Profile Photo Frame */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative group">
            {/* Glowing Border Backdrop */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 rounded-3xl blur-md opacity-70 group-hover:opacity-100 transition duration-500 group-hover:scale-105" />
            
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-900 shadow-2xl bg-gray-900">
              <Image 
                src="/my_photo_2.jpeg" 
                alt="Paluri Sai Sasidhar" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics Bar */}
      <section className="max-w-7xl mx-auto my-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div key={idx} className="glass-card p-6 rounded-2xl flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 shadow-sm hover:shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{m.label}</span>
                  <Icon className={`w-5 h-5 ${m.color}`} />
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-1">{m.value}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">{m.subtext}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Tech Stack & Core Capabilities */}
      <section className="max-w-7xl mx-auto my-16">
        <div className="text-center mb-10">
          <h2 className="text-sm font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" /> Tech Stack & Core Capabilities
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
            Engineered with Modern Industry Standards
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {featuredTech.map((tech) => (
            <div 
              key={tech.name}
              className="glass-card p-4 rounded-2xl flex flex-col items-center justify-center text-center gap-2 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 cursor-default group"
            >
              <div className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800/80 group-hover:scale-110 transition-transform">
                <TechIcon name={tech.name} className="w-7 h-7" />
              </div>
              <span className="text-sm font-bold text-gray-900 dark:text-white">{tech.name}</span>
              <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">{tech.category}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Competitive Programming Showcase Section */}
      <section className="max-w-7xl mx-auto my-16">
        <div className="glass-card p-8 sm:p-10 rounded-3xl border border-gray-200/70 dark:border-gray-800/80 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-xs font-bold text-amber-500 uppercase tracking-wider block mb-1">Algorithmic Mastery</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">Competitive Programming Profiles</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 max-w-md">
              Actively solving complex Data Structures & Algorithms challenges. Check out my official profiles below!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* LeetCode Card */}
            <a 
              href="https://leetcode.com/u/0HmlnBA2pz/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl glass-card border border-amber-500/20 hover:border-amber-500/60 hover:shadow-lg transition-all duration-300 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-amber-500/10 text-amber-500 group-hover:scale-110 transition-transform">
                  <TechIcon name="leetcode" className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-amber-500 transition-colors">LeetCode Profile</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Username: @0HmlnBA2pz</p>
                  <div className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-amber-500/15 text-amber-600 dark:text-amber-400">
                    ⚡ Peak Rating: 1650
                  </div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
            </a>

            {/* CodeChef Card */}
            <a 
              href="https://www.codechef.com/users/sasidhar_07" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl glass-card border border-amber-700/20 hover:border-amber-700/60 hover:shadow-lg transition-all duration-300 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-amber-800/10 text-amber-700 dark:text-amber-500 group-hover:scale-110 transition-transform">
                  <TechIcon name="codechef" className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">CodeChef Profile</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Username: @sasidhar_07</p>
                  <div className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-amber-700/15 text-amber-700 dark:text-amber-400">
                    ⭐ Peak Rating: 1760 (3-Star)
                  </div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-amber-600 dark:group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
