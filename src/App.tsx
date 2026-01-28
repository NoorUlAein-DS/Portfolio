
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingBackground from './components/FloatingBackground';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Milestones from './pages/Milestones';
import type { Theme } from './types';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-500 ${
        theme === 'dark' ? 'bg-[#0a0a0a] text-white' : 'bg-[#fef7ff] text-gray-900'
      }`}>
        <FloatingBackground />
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/milestones" element={<Milestones />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
