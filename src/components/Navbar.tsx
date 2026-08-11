"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';
import { useState } from 'react';
import { Home, User, FolderGit2, FileText, Mail, Sparkles, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/about', label: 'About', icon: User },
    { href: '/projects', label: 'Projects', icon: FolderGit2 },
    { href: '/resume', label: 'Resume', icon: FileText },
    { href: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 start-0 glass-nav transition-all duration-300">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto px-4 sm:px-6 py-3.5">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-600 p-0.5 shadow-md group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-white dark:bg-gray-900 rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-cyan-400 group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-tight text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
              Sai Sasidhar <span className="text-blue-600 dark:text-cyan-400">Paluri</span>
            </span>
            <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase">AI/ML & Systems Eng.</span>
          </div>
        </Link>

        {/* Right side Theme & Hamburger Controls */}
        <div className="flex md:order-2 items-center gap-3">
          <ThemeToggle />

          <button 
            type="button" 
            className="inline-flex items-center p-2.5 text-sm text-gray-600 rounded-xl md:hidden hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800/80 transition-colors" 
            aria-controls="navbar-sticky" 
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
          <ul className="flex flex-col md:flex-row p-4 md:p-1.5 mt-4 md:mt-0 font-medium rounded-2xl md:rounded-full bg-white/80 dark:bg-gray-900/80 md:bg-gray-100/60 md:dark:bg-gray-800/50 border border-gray-200/60 dark:border-gray-700/50 md:space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl md:rounded-full text-sm font-semibold transition-all duration-200
                      ${isActive 
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/20' 
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-gray-200/50 dark:hover:bg-gray-700/40'
                      }
                    `}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-500 dark:text-gray-400'}`} />
                    <span>{link.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
