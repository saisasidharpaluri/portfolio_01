export default function About() {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        {/* Header / Bio */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            I am a Computer Science and Engineering student at IIITM Gwalior, with a strong focus on cybersecurity, full-stack development, and artificial intelligence. 
            I enjoy building secure, scalable applications and exploring the intersection of AI and security.
          </p>
          <div className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
             Beyond coding, I'm a disciplined martial artist and swimmer, believing that physical endurance complements mental resilience.
          </div>
        </div>
  
        {/* Education Section */}
        <div className="border-t border-gray-100 dark:border-gray-800 pt-10 mb-10">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-blue-600 dark:text-blue-400">🎓</span> Education
            </h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h3 className="text-xl font-bold">Indian Institute of Information Technology & Management</h3>
                    <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">June 2023 – Expected May 2027</span>
                </div>
                <p className="text-gray-700 dark:text-gray-200 font-medium mb-4">B.Tech in Computer Science and Engineering | Gwalior, Madhya Pradesh</p>
                
                <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Relevant Coursework:</h4>
                     <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                        <li><span className="font-medium">Core CS:</span> Data Structures, Operating Systems, Database Management (SQL)</li>
                        <li><span className="font-medium">Security:</span> Cryptography, Network Security, Penetration Testing (VAPT), Digital Forensics</li>
                        <li><span className="font-medium">Specialized:</span> AI in Cybersecurity, Cloud Security, Secure SDLC</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Technical Skills Section */}
        <div className="border-t border-gray-100 dark:border-gray-800 pt-10 mb-10">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-blue-600 dark:text-blue-400">🛠️</span> Technical Skills
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h3 className="font-bold text-lg mb-3">Languages & Databases</h3>
                    <div className="flex flex-wrap gap-2">
                        {['C/C++', 'Python', 'Java', 'HTML/CSS', 'JavaScript', 'SQL', 'MySQL', 'PostgreSQL'].map(s => (
                            <span key={s} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm rounded-full">
                                {s}
                            </span>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-3">Developer Tools</h3>
                    <div className="flex flex-wrap gap-2">
                        {['VS Code', 'Git', 'Latex', 'Wireshark', 'Splunk', 'Linux CLI', 'Nmap', 'Burpsuite', 'John the Ripper', 'Metasploit'].map(s => (
                            <span key={s} className="px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 text-sm rounded-full">
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
                <span className="text-blue-600 dark:text-blue-400">🏆</span> Leadership & Activities
            </h2>
            <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="flex justify-between items-start mb-2">
                         <h3 className="text-lg font-bold">Member of Student Activity Council (Cultural)</h3>
                         <span className="text-sm text-gray-500">2024 - 2025</span>
                    </div>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 text-sm leading-relaxed">
                        <li>Organized and coordinated Janmashtami celebration, overseeing event planning, logistics, and cultural programming.</li>
                        <li>Contributed to "Aurora" (Annual Cultural Festival) by coordinating the IPL Auction event and independently organizing a Pictionary competition.</li>
                        <li>Served as a core organizer for Orientation Week, leading activities to welcome and onboard junior students.</li>
                    </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-bold mb-3">Sports Achievements</h3>
                     <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 text-sm leading-relaxed">
                        <li><span className="font-semibold">Black Belt Karateka:</span> 9+ years of training, 30+ tournaments, multiple Gold/Silver/Bronze medals at National/State/Regional levels.</li>
                        <li><span className="font-semibold">Swimming:</span> Trained swimmer proficient in multiple strokes, demonstrating endurance and commitment.</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Certifications */}
         <div className="border-t border-gray-100 dark:border-gray-800 pt-10">
             <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-blue-600 dark:text-blue-400">📜</span> Certifications & Achievements
            </h2>
             <ul className="grid grid-cols-1 gap-4">
                 {[
                     "Achieved a rank of 8741 in JEE Mains 2023",
                     "Cybersecurity Fundamentals by IBM",
                     "Google Cybersecurity Professional Certificate (Coursera)",
                     "Datacom Cybersecurity Job Simulation (Forage)",
                     "Tata Cybersecurity Security Analyst Job Simulation (Forage)"
                 ].map((cert, i) => (
                      <li key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <span className="mt-1 text-green-500">✓</span>
                        <span className="text-gray-700 dark:text-gray-200">{cert}</span>
                      </li>
                 ))}
             </ul>
        </div>

      </div>
    );
  }
