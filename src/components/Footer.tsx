import Link from 'next/link';
import { TechIcon } from './TechIcons';
import { Sparkles, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-200/60 dark:border-gray-800/60 glass-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:flex md:items-center md:justify-between gap-4">
        
        {/* Left branding */}
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <div className="p-1.5 rounded-lg bg-blue-600/10 dark:bg-cyan-400/10 text-blue-600 dark:text-cyan-400">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
            © 2026 <Link href="/" className="hover:text-blue-600 dark:hover:text-cyan-400 font-bold text-gray-900 dark:text-white transition-colors">Paluri Sai Sasidhar</Link>. Crafted with AI & Precision.
          </span>
        </div>

        {/* Quick Links & Socials */}
        <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400">
          <Link href="/about" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">About</Link>
          <Link href="/projects" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Projects</Link>
          <Link href="/resume" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Resume</Link>
          <Link href="/contact" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Contact</Link>
          
          <div className="flex items-center gap-3 pl-2 border-l border-gray-300 dark:border-gray-700">
            <a 
              href="https://github.com/saisasidharpaluri" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-1.5 rounded-lg hover:bg-gray-200/60 dark:hover:bg-gray-800 transition-colors"
            >
              <TechIcon name="github" className="w-4 h-4" />
            </a>
            <a 
              href="https://www.linkedin.com/in/sai-sasidhar-paluri-896b43289/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-1.5 rounded-lg hover:bg-gray-200/60 dark:hover:bg-gray-800 transition-colors"
            >
              <TechIcon name="linkedin" className="w-4 h-4 text-blue-600" />
            </a>
            <a 
              href="https://leetcode.com/u/0HmlnBA2pz/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="p-1.5 rounded-lg hover:bg-gray-200/60 dark:hover:bg-gray-800 transition-colors"
            >
              <TechIcon name="leetcode" className="w-4 h-4 text-amber-500" />
            </a>
            <a 
              href="https://www.codechef.com/users/sasidhar_07" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="CodeChef"
              className="p-1.5 rounded-lg hover:bg-gray-200/60 dark:hover:bg-gray-800 transition-colors"
            >
              <TechIcon name="codechef" className="w-4 h-4 text-amber-700 dark:text-amber-500" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
