
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import type{ Theme } from '../types';


interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
    {label:'Milestones', path:'/milestones' }
  ];

  return (
    <nav className="sticky top-0 z-50 px-2 sm:px-6 py-4 flex justify-center w-full">
      <div className="w-full max-w-5xl glass rounded-2xl flex items-center justify-between px-3 sm:px-6 py-2.5 border border-white/10 relative">
        
        {/* Logo */}
        {/* <Link to="/" className="flex items-center gap-2 group shrink-0">
          <div className="bg-[#d4a5e0] p-1.5 sm:p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
            <Database className="text-white w-4 h-4 sm:w-6 h-6" />
          </div>
          <span className="font-bold text-base sm:text-xl tracking-tight dark:text-white text-gray-900 hidden xs:block">
            DS.<span className="text-[#d4a5e0]">P</span>
          </span>
        </Link> */}
{/* Updated Logo with Butterfly */}
<Link to="/" className="flex items-center gap-2 group shrink-0">
  <div className="bg-[#d4a5e0] p-1.5 sm:p-2 rounded-lg group-hover:rotate-12 transition-all duration-300 shadow-lg shadow-[#d4a5e0]/20 flex items-center justify-center">
    {/* Image Logo */}
    <img 
      src="/butterflly.png"  // Aapki image ka path
      alt="Logo"
      className="w-5 h-5 sm:w-7 h-7 object-contain brightness-0 invert" // 'invert' se image white ho jayegi agar wo dark hai
    />
  </div>
  <span className="font-bold text-base sm:text-xl tracking-tight dark:text-white text-gray-900 hidden xs:block">
    DS.<span className="text-[#d4a5e0]">P</span>
  </span>
</Link>
        {/* Combined Navigation & Theme Toggle */}
        <div className="flex items-center gap-1 sm:gap-4 ml-auto">
          <div className="flex items-center gap-0.5 sm:gap-2 mr-1 sm:mr-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[20px] sm:text-xs md:text-sm font-bold transition-all px-2 sm:px-3 py-1.5 rounded-xl relative ${
                  location.pathname === item.path 
                    ? 'text-[#d4a5e0] bg-[#d4a5e0]/5' 
                    : theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-[#d4a5e0]'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div 
                    layoutId="navActiveUnderline"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#d4a5e0] rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="h-6 w-[1px] bg-white/10 mx-1 sm:mx-0" />

          <button
            onClick={toggleTheme}
            className="p-2 sm:p-2.5 rounded-xl glass hover:scale-110 transition-all dark:text-yellow-400 text-[#d4a5e0] shrink-0"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
