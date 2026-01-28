
import React from 'react';
import { Github, Linkedin, Instagram, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="px-6 py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="text-sm font-medium dark:text-gray-400 text-gray-600 flex items-center justify-center md:justify-start gap-2">
            Made with passion by a <span className="text-[#d4a5e0] font-bold">Data Science Student</span> <Heart size={14} className="fill-[#d4a5e0] text-[#d4a5e0]" />
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] dark:text-gray-600 text-gray-400 mt-2">© 2026 Portfolio.| Logic. Data. Impact.</p>
        </div>

        <div className="flex gap-6 items-center">
          <a href="https://github.com/NoorUlAein-DS" className="dark:text-gray-500 text-gray-400 hover:text-white dark:hover:text-white transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/noor-ul-aein-salamat-khan-7105323a2/" className="dark:text-gray-500 text-gray-400 hover:text-[#0077B5] transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="https://www.instagram.com/noorulaein477/" className="dark:text-gray-500 text-gray-400 hover:text-[#E4405F] transition-colors">
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
