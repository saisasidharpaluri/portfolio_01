import { TechIcon } from "@/components/TechIcons";
import { Briefcase, GraduationCap, Wrench, Trophy, Award, MapPin, Calendar, CheckCircle2 } from "lucide-react";

export default function About() {
  const skillCategories = [
    {
      title: "AI/ML & GenAI",
      skills: ['PyTorch', 'TensorFlow', 'HuggingFace', 'LLMs', 'LVMs', 'TensorRT', 'vLLM', 'RAG Pipelines', 'Model Quantization'],
      color: "border-blue-500/30 text-blue-600 dark:text-cyan-400 bg-blue-50/50 dark:bg-blue-950/40"
    },
    {
      title: "Languages",
      skills: ['Python', 'C/C++', 'JavaScript (ES6+)', 'SQL', 'Java'],
      color: "border-cyan-500/30 text-cyan-600 dark:text-cyan-300 bg-cyan-50/50 dark:bg-cyan-950/40"
    },
    {
      title: "ML Infra & Systems",
      skills: ['CUDA (Basics)', 'Docker', 'Triton Inference Server', 'gRPC', 'Multiprocessing', 'Linux CLI'],
      color: "border-purple-500/30 text-purple-600 dark:text-purple-300 bg-purple-50/50 dark:bg-purple-950/40"
    },
    {
      title: "Frameworks & Databases",
      skills: ['FastAPI', 'Flask', 'Next.js', 'PostgreSQL', 'Redis', 'SQLite', 'RESTful API Design'],
      color: "border-emerald-500/30 text-emerald-600 dark:text-emerald-300 bg-emerald-50/50 dark:bg-emerald-950/40"
    },
    {
      title: "Developer Tools",
      skills: ['Git / GitHub', 'TensorBoard', 'Model Evaluation & Benchmarking Tools'],
      color: "border-amber-500/30 text-amber-600 dark:text-amber-300 bg-amber-50/50 dark:bg-amber-950/40"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6">
      
      {/* Header Bio */}
      <div className="mb-14 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight text-gray-900 dark:text-white">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Me</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          I am a Computer Science & Engineering student at <span className="font-semibold text-gray-900 dark:text-white">IIITM Gwalior</span> specializing in Artificial Intelligence, Machine Learning Infrastructure, and High-Performance Systems.
        </p>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          I have industry experience engineering custom TensorRT inference acceleration pipelines for edge hardware (NVIDIA Jetson Nano), designing geospatial routing algorithms, and building multimodal Generative AI RAG search engines.
        </p>
      </div>

      {/* Industry Experience Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900 dark:text-white">
          <div className="p-2 rounded-xl bg-blue-600 text-white shadow-md">
            <Briefcase className="w-5 h-5" />
          </div>
          Work Experience
        </h2>

        <div className="relative border-l-2 border-blue-500/30 dark:border-blue-500/20 ml-4 pl-6 space-y-8">
          <div className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-blue-100 dark:ring-blue-900/60" />
            
            <div className="glass-card p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:border-blue-500/40">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Tecdatum Infoservices Pvt. Ltd.</h3>
                  <p className="text-sm font-semibold text-blue-600 dark:text-cyan-400">AI Intern</p>
                </div>
                <div className="flex flex-col sm:items-end text-xs text-gray-500 dark:text-gray-400 gap-1 font-medium">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> May 2026 – July 2026</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Hyderabad, Telangana</span>
                </div>
              </div>

              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  <span><strong className="text-gray-900 dark:text-white">Edge AI & ANPR System:</strong> Engineered modular Python architecture and Docker pipeline for ANPR system targeting NVIDIA Jetson Nano edge devices.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                  <span><strong className="text-gray-900 dark:text-white">Hardware-Accelerated Interface:</strong> Built custom TensorRT inference pipeline for YOLOv8 models, programmatically managing GPU memory allocation and async contexts to reduce latency by <strong>68%</strong> while maintaining 95% accuracy.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                  <span><strong className="text-gray-900 dark:text-white">Escape Route Optimization:</strong> Designed geospatial routing engine using OSMnx & NetworkX; optimized pathfinding efficiency with custom pruned Dijkstra algorithm truncating branches using spatial coordinates.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900 dark:text-white">
          <div className="p-2 rounded-xl bg-cyan-600 text-white shadow-md">
            <GraduationCap className="w-5 h-5" />
          </div>
          Education
        </h2>

        <div className="glass-card p-6 sm:p-8 rounded-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Indian Institute of Information Technology & Management, Gwalior</h3>
              <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">B.Tech in Computer Science and Engineering</p>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200/60 dark:border-cyan-800/50 self-start sm:self-auto">
              June 2023 – Expected May 2027
            </span>
          </div>

          <div className="mt-5 pt-5 border-t border-gray-200/60 dark:border-gray-800/60">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">Relevant Coursework</h4>
            <div className="flex flex-wrap gap-2">
              {[
                'Data Structures & Algorithms',
                'Operating Systems',
                'Database Management (DBMS)',
                'Computer Networks',
                'Object-Oriented Programming',
                'Cryptography & Network Security',
                'Software Engineering',
                'Design and Analysis of Algorithms'
              ].map((course) => (
                <span key={course} className="px-3 py-1 text-xs font-medium rounded-lg glass-card text-gray-700 dark:text-gray-300">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Technical Skills Section with Brand Icons */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900 dark:text-white">
          <div className="p-2 rounded-xl bg-purple-600 text-white shadow-md">
            <Wrench className="w-5 h-5" />
          </div>
          Technical Skills & Tooling
        </h2>

        <div className="space-y-6">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="glass-card p-6 rounded-2xl">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => (
                  <div 
                    key={skill} 
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border text-xs font-semibold transition-transform hover:scale-105 ${cat.color}`}
                  >
                    <TechIcon name={skill} className="w-4 h-4" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements & Certifications */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900 dark:text-white">
          <div className="p-2 rounded-xl bg-amber-500 text-white shadow-md">
            <Award className="w-5 h-5" />
          </div>
          Achievements & Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: "CodeChef Peak 1760", desc: "Active Competitive Programmer", tag: "Rating 1760" },
            { title: "LeetCode Peak 1650", desc: "Active Competitive Programmer", tag: "Rating 1650" },
            { title: "JEE Mains 2023 AIR 8741", desc: "Top 0.8% out of 1.2M+ Candidates", tag: "AIR 8741" },
            { title: "Google Cybersecurity Professional", desc: "Coursera Certified", tag: "Google Cert" },
            { title: "IBM Cybersecurity Fundamentals", desc: "IBM Security Fundamentals", tag: "IBM Cert" }
          ].map((item, idx) => (
            <div key={idx} className="glass-card p-5 rounded-2xl flex items-start gap-3.5 hover:border-amber-500/40 transition-colors">
              <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-gray-900 dark:text-white">{item.title}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership & Sports */}
      <div>
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900 dark:text-white">
          <div className="p-2 rounded-xl bg-emerald-600 text-white shadow-md">
            <Trophy className="w-5 h-5" />
          </div>
          Leadership & Extracurriculars
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-6 rounded-2xl">
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Student Activity Council (Cultural)</h3>
            <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-3">Event Management</p>
            <ul className="space-y-2 text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              <li>• Coordinated IPL Auction and Pictionary events for Aurora annual cultural fest.</li>
              <li>• Spearheaded 10+ Orientation Week events, improving student satisfaction scores by 15%.</li>
            </ul>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Athletics & Sports</h3>
            <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-3">Karate & Swimming</p>
            <ul className="space-y-2 text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              <li>• <strong className="text-gray-900 dark:text-white">Karate Black Belt:</strong> 9+ years training, 30+ tournament appearances (Gold/Silver/Bronze medalist).</li>
              <li>• <strong className="text-gray-900 dark:text-white">Swimming:</strong> Trained competitive swimmer with high endurance focus.</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}
