export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Header / Bio */}
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          I am a Computer Science and Engineering student at IIITM Gwalior specializing in Artificial Intelligence, Machine Learning Infrastructure, and High-Performance Systems. 
          I have hands-on industry experience building TensorRT inference acceleration pipelines, geospatial routing algorithms, and multimodal Generative AI RAG search engines.
        </p>
        <div className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          Outside of technical work, I am an active competitive programmer (CodeChef 1760, LeetCode 1650), a Black Belt Karateka with 9+ years of training, and a trained competitive swimmer.
        </div>
      </div>

      {/* Experience Section */}
      <div className="border-t border-gray-100 dark:border-gray-800 pt-10 mb-10">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="text-blue-600 dark:text-blue-400">💼</span> Experience
        </h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="text-xl font-bold">Tecdatum Infoservices Pvt. Ltd.</h3>
            <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">May 2026 – July 2026</span>
          </div>
          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">AI Intern | Hyderabad, Telangana</p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 text-sm leading-relaxed">
            <li>
              <span className="font-semibold text-gray-900 dark:text-gray-100">Edge AI & ANPR System:</span> Engineered a modular Python-based software architecture and Docker containerized deployment pipeline for an Automatic Number Plate Recognition (ANPR) system targeting NVIDIA Jetson Nano edge devices.
            </li>
            <li>
              <span className="font-semibold text-gray-900 dark:text-gray-100">Hardware-Accelerated Interface:</span> Built a custom TensorRT inference pipeline to compile and execute YOLOv8 models, programmatically managing GPU memory allocation and asynchronous execution contexts to reduce latency by 68% while maintaining 95% accuracy.
            </li>
            <li>
              <span className="font-semibold text-gray-900 dark:text-gray-100">Escape Route Optimization:</span> Designed a geospatial routing engine using OSMnx and NetworkX to model complex street grids; optimized pathfinding efficiency by developing a custom pruned Dijkstra algorithm that truncated search branches using spatial coordinates.
            </li>
          </ul>
        </div>
      </div>

      {/* Education Section */}
      <div className="border-t border-gray-100 dark:border-gray-800 pt-10 mb-10">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="text-blue-600 dark:text-blue-400">🎓</span> Education
        </h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="text-xl font-bold">Indian Institute of Information Technology & Management, Gwalior</h3>
            <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">June 2023 – Expected May 2027</span>
          </div>
          <p className="text-gray-700 dark:text-gray-200 font-medium mb-4">Pursuing B.Tech in Computer Science and Engineering | Gwalior, Madhya Pradesh</p>
          
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Relevant Coursework:</h4>
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
              ].map(course => (
                <span key={course} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs rounded-md font-medium">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Technical Skills Section */}
      <div className="border-t border-gray-100 dark:border-gray-800 pt-10 mb-10">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="text-blue-600 dark:text-blue-400">🛠️</span> Technical Skills
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-2">AI/ML & GenAI</h3>
            <div className="flex flex-wrap gap-2">
              {['PyTorch', 'TensorFlow', 'HuggingFace', 'LLMs', 'LVMs', 'TensorRT', 'vLLM', 'RAG Pipelines', 'Model Quantization'].map(s => (
                <span key={s} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full font-medium">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-2">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'C/C++', 'JavaScript (ES6+)', 'SQL', 'Java'].map(s => (
                <span key={s} className="px-3 py-1 bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-sm rounded-full font-medium">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-2">ML Infra & Systems</h3>
            <div className="flex flex-wrap gap-2">
              {['CUDA (Basics)', 'Docker', 'Triton Inference Server', 'gRPC', 'Multiprocessing', 'Linux CLI'].map(s => (
                <span key={s} className="px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm rounded-full font-medium">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-2">Frameworks & Databases</h3>
            <div className="flex flex-wrap gap-2">
              {['FastAPI', 'Flask', 'Next.js', 'PostgreSQL', 'Redis', 'SQLite', 'RESTful API Design'].map(s => (
                <span key={s} className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm rounded-full font-medium">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-2">Developer Tools</h3>
            <div className="flex flex-wrap gap-2">
              {['Git / GitHub', 'TensorBoard', 'Model Evaluation & Benchmarking Tools'].map(s => (
                <span key={s} className="px-3 py-1 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-sm rounded-full font-medium">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Leadership & Extracurricular */}
      <div className="border-t border-gray-100 dark:border-gray-800 pt-10 mb-10">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="text-blue-600 dark:text-blue-400">🏆</span> Leadership & Extracurricular
        </h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold">Student Activity Council (Cultural)</h3>
              <span className="text-sm text-gray-500">Event Management</span>
            </div>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 text-sm leading-relaxed">
              <li>Coordinated IPL Auction and Pictionary events for Aurora (annual cultural fest).</li>
              <li>Spearheaded 10+ Orientation Week events, improving student satisfaction scores by 15%.</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-bold mb-3">Athletics & Sports</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 text-sm leading-relaxed">
              <li><span className="font-semibold">Martial Arts:</span> Black Belt in Karate with 9+ years of training and 30+ tournament appearances (Gold/Silver/Bronze medalist).</li>
              <li><span className="font-semibold">Swimming:</span> Trained competitive swimmer with focus on physical endurance.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Certifications & Achievements */}
      <div className="border-t border-gray-100 dark:border-gray-800 pt-10">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="text-blue-600 dark:text-blue-400">📜</span> Achievements & Certifications
        </h2>
        <ul className="grid grid-cols-1 gap-4">
          {[
            "Active competitive programmer: Peak rating of 1760 on CodeChef and 1650 on LeetCode.",
            "Achieved an All India Rank (AIR) of 8741 in JEE Mains 2023 (Top 0.8% out of 1.2M+ candidates).",
            "Google Cybersecurity Professional Certificate",
            "IBM Cybersecurity Fundamentals"
          ].map((cert, i) => (
            <li key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm">
              <span className="mt-0.5 text-emerald-500 font-bold">✓</span>
              <span className="text-gray-700 dark:text-gray-200 font-medium">{cert}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
