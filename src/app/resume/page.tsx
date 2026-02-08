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
          <h2 className="text-3xl font-bold mb-2">Your Name</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-2">Full Stack Developer</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span>📍 City, Country</span>
            <span>📧 email@example.com</span>
            <span>🔗 linkedin.com/in/yourprofile</span>
            <span>🐙 github.com/yourusername</span>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400 uppercase tracking-wide">Professional Summary</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Passionate and results-driven Full Stack Developer with experience in building scalable web applications. 
            Proficient in modern frontend technologies like React and Next.js, as well as backend development with Node.js. 
            Demonstrated ability to solve complex problems and deliver high-quality code.
          </p>
        </div>

        {/* Experience */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400 uppercase tracking-wide">Experience</h3>
          
          <div className="mb-6">
            <div className="flex justify-between items-baseline mb-2">
              <h4 className="text-lg font-bold">Senior Frontend Developer</h4>
              <span className="text-sm text-gray-500 dark:text-gray-400">Jan 2024 - Present</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-2 font-medium">Tech Company Inc.</p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li>Led the migration of the legacy codebase to Next.js, improving site performance by 40%.</li>
              <li>Collaborated with UX/UI designers to implement responsive design patterns.</li>
              <li>Mentored junior developers and conducted code reviews to ensure code quality.</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-baseline mb-2">
              <h4 className="text-lg font-bold">Web Developer</h4>
              <span className="text-sm text-gray-500 dark:text-gray-400">Jun 2022 - Dec 2023</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-2 font-medium">Digital Agency</p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li>Developed and maintained client websites using React and Tailwind CSS.</li>
              <li>Integrated third-party APIs for payment processing and content management.</li>
              <li>Optimized application performance and accessibility score.</li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400 uppercase tracking-wide">Education</h3>
          <div className="mb-4">
            <div className="flex justify-between items-baseline mb-1">
              <h4 className="text-lg font-bold">Bachelor of Science in Computer Science</h4>
              <span className="text-sm text-gray-500 dark:text-gray-400">2018 - 2022</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">University of Technology</p>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400 uppercase tracking-wide">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-gray-700 dark:text-gray-300 mb-2">Languages & Core</h4>
              <p className="text-gray-600 dark:text-gray-400">JavaScript (ES6+), TypeScript, HTML5, CSS3, Python, Java</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-700 dark:text-gray-300 mb-2">Frameworks & Libraries</h4>
              <p className="text-gray-600 dark:text-gray-400">React, Next.js, Redux, Tailwind CSS, Node.js, Express</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-700 dark:text-gray-300 mb-2">Tools & Platforms</h4>
              <p className="text-gray-600 dark:text-gray-400">Git, GitHub, VS Code, Vercel, Docker, Figma</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-700 dark:text-gray-300 mb-2">Databases</h4>
              <p className="text-gray-600 dark:text-gray-400">PostgreSQL, MongoDB, Supabase, Firebase</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
