
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { QUICK_ACTIONS } from '../constants';
import SkillCards from './SkillCard';

const Home: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] px-6 py-12 flex flex-col items-center">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border border-[#d4a5e0]/30 shadow-sm shadow-[#d4a5e0]/10">
            <Terminal size={16} className="text-[#d4a5e0]" />
            <span className="text-xs font-bold uppercase tracking-widest dark:text-white text-teal-700">Noor Ul Aein Salamat Khan</span>
          </div>
          <h1 className="text-4xl md:text-5xl xl:text-7xl font-extrabold mb-6 leading-tight dark:text-white text-teal-500">
            Hi, I'm a <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] to-[#E9D5FF]" style={{ color: '#611e61' }}>
  Data Science Student
</span>
          </h1>
          <p className="text-lg md:text-xl dark:text-gray-400 text-gray-600 mb-10 max-w-lg leading-relaxed font-medium">
            Crafting data-driven solutions and building elegant digital experiences through a lens of extreme focus and technical rigor.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/projects" className="px-8 py-4 bg-[#d4a5e0] hover:brightness-110 text-white rounded-2xl font-bold transition-all hover:scale-105 shadow-xl shadow-[#d4a5e0]/20 flex items-center gap-2">
              View My Work <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="px-8 py-4 glass dark:text-white text-gray-500 rounded-2xl font-bold transition-all hover:bg-white/10 border border-white/20">
              Get In Touch
            </Link>
          </div>
        </motion.div>

        {/* Profile / Hero Graphics */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 xl:w-96 xl:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#d4a5e0] to-teal-500 blur-3xl opacity-30 animate-pulse" />
    
           {/* <SkillCards /> */}
            {/* <div className="relative glass w-full h-full rounded-3xl border border-white/20 flex items-center justify-center p-4 overflow-hidden group shadow-2xl">
               {/* <img 
                 src="https://picsum.photos/seed/portrait/400/400" 
                 alt="Portrait" 
                 className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
               /> */}
               {/* <div className="absolute top-4 left-4 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
               </div>
            </div>  */}
          </div>
        </motion.div>
      </div>
<div className="w-full max-w-7xl mb-24 pt-1">
        <h2 className="text-3xl font-bold mb-10 dark:text-white text-gray-500 text-center">My Skill Progress</h2>
        <SkillCards /> 
      </div>
      {/* Quick Actions */}
      <div className="w-full max-w-6xl mt-24">
        <h2 className="text-3xl font-bold mb-10 dark:text-white text-gray-500 text-center lg:text-left">What I Build</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {QUICK_ACTIONS.map((action, idx) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center group cursor-default shadow-lg"
            >
              <div className={`${action.color === 'bg-purple-500' ? 'bg-[#d4a5e0]' : action.color} p-5 rounded-2xl text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                {action.icon}
              </div>
              <h3 className="font-bold text-xl dark:text-white text-gray-500 mb-2">{action.title}</h3>
<p className="text-sm dark:text-gray-400 text-gray-500">
  {action.description} 
</p>

            </motion.div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
