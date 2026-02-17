
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-lg"></div>
          <span className="font-bold text-xl tracking-tighter">MALIBULUL</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#team" className="hover:text-white transition-colors">Team</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a 
            href="https://github.com/ProjectMalibulul" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-all font-semibold"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
