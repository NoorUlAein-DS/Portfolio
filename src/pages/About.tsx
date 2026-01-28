
import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../constants';
import { Calendar, Award, Code2, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] px-6 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 dark:text-white text-gray-900"
          >
            A Journey of <span className="text-[#d4a5e0]">Disciplined Growth</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg dark:text-gray-400 text-gray-600 max-w-2xl mx-auto"
          >
            <p className="text-lg md:text-xl dark:text-gray-300 text-gray-700 leading-relaxed">
  Merging the precision of 
  <span className="text-teal-600 drop-shadow-[0_0_8px_rgba(45,212,191,0.8)] font-bold"> data science </span> 
  with the creativity of 
  <span className="text-[#d4a5e0] drop-shadow-[0_0_8px_rgba(212,165,224,0.6)] font-bold"> modern software engineering</span>.
</p>
            {/* Merging the precision of data science with the creativity of modern software engineering. */}
          </motion.p>
          
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-10 rounded-3xl text-center border border-white/10 group"
            >
              <div className="text-5xl font-extrabold text-[#d4a5e0] mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm font-bold uppercase tracking-widest dark:text-gray-300 text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* My Journey */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold dark:text-white text-gray-900">My Journey</h2>
            <p className="dark:text-gray-400 text-gray-600 leading-relaxed">
My journey into technology began with a major turning point in 2023. Originally a Pre-Medical student, I transitioned into the tech landscape by enrolling in a rigorous one-year programming foundation course. This experience reshaped my perspective, revealing that the precision required in medicine perfectly complements the logic of software development.            </p>
            <p className="dark:text-gray-400 text-gray-600 leading-relaxed">
              Now, in 2026, as a 2nd-year Data Science student, I specialize in bridging the gap between domain-specific precision and technical innovation .I am dedicated to architecting data-driven solutions       </p>
            <div className="pt-4 grid grid-cols-2 gap-4">
               <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#d4a5e0]/10 text-[#d4a5e0]"><Code2 size={24} /></div>
                  <span className="text-sm font-bold dark:text-white">Clean Architecture</span>
               </div>
               <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-teal-500/10 text-teal-500"><Users size={24} /></div>
                  <span className="text-sm font-bold dark:text-white">Collaborative Mindset</span>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl border border-white/10 space-y-8"
          >
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-[#d4a5e0] ring-4 ring-[#d4a5e0]/20" />
                <div className="w-0.5 h-full bg-white/10" />
              </div>
              <div>
                <h4 className="font-bold dark:text-white mb-1">Foundational Learning</h4>
                <p className="text-xs text-[#d4a5e0] mb-2">2023 - 2024</p>
                <p className="text-sm dark:text-gray-400 text-gray-600">Mastered HTML/CSS, JavaScript, and Canva.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-teal-500 ring-4 ring-teal-500/20" />
                <div className="w-0.5 h-16 bg-white/10" />
              </div>
              <div>
                <h4 className="font-bold dark:text-white mb-1">Data-Driven Transition</h4>
                <p className="text-xs text-teal-500 mb-2">2025 - Present</p>
                <p className="text-sm dark:text-gray-400 text-gray-600">Diving deep into predictive analytics and complex systems.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
