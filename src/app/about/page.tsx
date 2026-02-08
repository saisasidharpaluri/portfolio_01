export default function About() {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            Hello! I am a passionate Software Engineer with a love for building scalable and user-friendly web applications.
            My journey into the world of tech started with a curiosity for how things work, and it has evolved into a career where I get to solve complex problems every day.
          </p>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            I specialize in the MERN stack (MongoDB, Express, React, Node.js) and have a keen interest in modern frontend frameworks like Next.js. 
            When I'm not coding, you can find me hiking the nearest trail, reading a good sci-fi novel, or experimenting with the latest tech trends.
          </p>
        </div>
  
        <div className="border-t border-gray-100 dark:border-gray-800 pt-12">
            <h2 className="text-2xl font-bold mb-8">What I Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md hover:-translate-y-1 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 text-blue-600 dark:text-blue-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Frontend Development</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                        Building responsive, accessible, and performant user interfaces using React, Next.js, and Tailwind CSS.
                    </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md hover:-translate-y-1 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4 text-green-600 dark:text-green-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Backend Development</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                        Creating robust APIs and backend services using Node.js, Express, and databases like MongoDB and PostgreSQL.
                    </p>
                </div>
            </div>
        </div>

        <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
            <div className="flex flex-wrap gap-2">
                {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'Git', 'Docker', 'AWS'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors hover:scale-105 transform transition-transform cursor-default">
                    {skill}
                    </span>
                ))}
            </div>
        </div>
      </div>
    );
  }
