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
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Sasidhar</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            A creative Full Stack Developer crafting beautiful, intuitive, and robust web experiences. 
            Specializing in the React ecosystem and modern web performance.
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
        <h2 className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Tech Stack & Tools</h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
           {/* You can replace these with SVG icons */}
           <span className="text-xl font-bold hover:scale-110 transform transition-transform duration-200 cursor-default">Python</span>
           <span className="text-xl font-bold hover:scale-110 transform transition-transform duration-200 cursor-default">C/C++</span>
           <span className="text-xl font-bold hover:scale-110 transform transition-transform duration-200 cursor-default">Next.js</span>
           <span className="text-xl font-bold hover:scale-110 transform transition-transform duration-200 cursor-default">FastAPI</span>
           <span className="text-xl font-bold hover:scale-110 transform transition-transform duration-200 cursor-default">Cybersecurity</span>
        </div>
      </section>
    </div>
  );
}
