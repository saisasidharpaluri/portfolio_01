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
          <p className="text-gray-600 dark:text-gray-400 mb-2">Computer Science Student | Cybersecurity Enthusiast</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span>📍 Gwalior, Madhya Pradesh</span>
            <span>📧 [Email Address]</span>
            <span>🔗 [LinkedIn Profile]</span>
            <span>🐙 [GitHub Profile]</span>
          </div>
        </div>

        {/* Education */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400 uppercase tracking-wide">Education</h3>
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <h4 className="text-lg font-bold">Indian Institute of Information Technology & Management</h4>
              <span className="text-sm text-gray-500 dark:text-gray-400">June 2023 – Expected May 2027</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-2 font-medium">B.Tech in Computer Science and Engineering</p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
                <li><span className="font-semibold">Relevant Coursework:</span> Data Structures, Operating Systems, DBMS (SQL), Cryptography, Network Security, VAPT, Digital Forensics, AI in Cybersecurity.</li>
            </ul>
          </div>
        </div>

        {/* Projects */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400 uppercase tracking-wide">Projects</h3>
          
          <div className="mb-6">
            <div className="flex justify-between items-baseline mb-2">
              <h4 className="text-lg font-bold">NetHunter: Network Vulnerability Scanner</h4>
              <span className="text-sm text-gray-500 dark:text-gray-400">Dec 2025</span>
            </div>
            <p className="text-sm text-blue-500 dark:text-blue-400 mb-2">Python, FastAPI, Next.js, Nmap, SQLite</p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
              <li>Engineered a production-grade network reconnaissance tool using Python and Nmap.</li>
              <li>Architected a full-stack dashboard with Next.js 15 and FastAPI for real-time visualization.</li>
              <li>Implemented CVE lookup logic for actionable security insights.</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-baseline mb-2">
              <h4 className="text-lg font-bold">AI-Powered Phishing & Spam Detection Engine</h4>
              <span className="text-sm text-gray-500 dark:text-gray-400">Nov 2025 - Dec 2025</span>
            </div>
             <p className="text-sm text-blue-500 dark:text-blue-400 mb-2">Python, Scikit-Learn, NLP, Flask</p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
              <li>Developed a classification system to detect phishing/spam using NLP (TF-IDF).</li>
              <li>Achieved 98%+ accuracy with ML models (Naive Bayes, SVM, Random Forest).</li>
              <li>Integrated real-time verification web interface using Flask.</li>
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400 uppercase tracking-wide">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
             <div>
                 <span className="font-bold block mb-1">Languages:</span>
                 C/C++, Python, Java, HTML, CSS, Javascript, SQL
             </div>
             <div>
                 <span className="font-bold block mb-1">Databases:</span>
                 MySQL, Postgre SQL
             </div>
             <div className="md:col-span-2">
                 <span className="font-bold block mb-1">Tools:</span>
                 VS Code, Git, Latex, Wireshark, Splunk, Linux CLI, Nmap, Burpsuite, John the ripper, Metasploit
             </div>
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-8">
             <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400 uppercase tracking-wide">Leadership / Extracurricular</h3>
             <div className="mb-4">
                <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-lg font-bold">Member of Student Activity Council (Cultural)</h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">2024 - 2025</span>
                </div>
                 <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
                    <li>Organized Janmashtami celebration and coordinated cultural programming.</li>
                    <li>Contributed to "Aurora" festival (IPL Auction, Pictionary competition).</li>
                    <li>Served as a core organizer for Orientation Week.</li>
                </ul>
             </div>
             {/* Sports could go here or separate */}
        </div>
        
         {/* Certifications and Sports */}
        <div>
             <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400 uppercase tracking-wide">Certifications & Interests</h3>
             <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1 mb-4">
                 <li>Cybersecurity Fundamentals by IBM</li>
                 <li>Google Cybersecurity Professional Certificate</li>
                 <li>Datacom Cybersecurity Job Simulation</li>
                 <li>Tata Cybersecurity Security Analyst Job Simulation</li>
                 <li>Achieved a rank of 8741 in JEE Mains 2023</li>
             </ul>
             <div className="text-sm text-gray-700 dark:text-gray-300">
                <span className="font-bold">Sports:</span> Black Belt Karateka (Gold/Silver medalist), Competitive Swimmer.
             </div>
        </div>
      </div>
    </div>
  );
}
