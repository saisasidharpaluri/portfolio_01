import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "NetHunter: Network Vulnerability Scanner",
      description: "Engineered a production-grade network reconnaissance tool using Python and the Nmap library to automate the identification of active hosts, open ports, and service versions. Architected a full-stack dashboard with Next.js 15 and FastAPI, integrating real-time scan progress visualization and a centralized SQLite database. Implemented CVE lookup logic to transform scanning data into actionable security insights.",
      tech: ["Python", "FastAPI", "Next.js", "Nmap", "SQLite"],
      link: "https://github.com/saisasidharpaluri/network_vulnerability_scanner-nethunter",
      github: "https://github.com/saisasidharpaluri/network_vulnerability_scanner-nethunter",
      color: "from-blue-600 to-indigo-600"
    },
    {
      title: "AI-Powered Phishing & Spam Detection Engine",
      description: "Developed an intelligent classification system to detect malicious phishing attempts and spam emails using NLP techniques like Tokenization and TF-IDF. Trained Machine Learning models (Naive Bayes, SVM, Random Forest) achieving 98%+ accuracy. Integrated a real-time web interface using Flask for user verification of suspicious content.",
      tech: ["Python", "Scikit-Learn", "NLP", "Flask", "ML"],
      link: "https://github.com/saisasidharpaluri/AI-powered_phishing_and_spam_detection_engine",
      github: "https://github.com/saisasidharpaluri/AI-powered_phishing_and_spam_detection_engine",
      color: "from-emerald-500 to-teal-600"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A collection of projects that demonstrate my technical capabilities and passion for problem-solving.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-blue-500/30 transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col h-full transform">
            {/* Project Gradient Banner */}
            <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
            
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <div className="flex gap-3">
                    {/* GitHub Icon */}
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="GitHub Repo">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-1">
                {project.description}
              </p>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs font-semibold bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

                <a 
                    href={project.link}
                    target="_blank" rel="noopener noreferrer" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium group-hover:translate-x-1 transition-transform"
                >
                    View Project <span className="ml-1">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
