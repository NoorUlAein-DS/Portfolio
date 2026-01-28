
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import type { Category } from '../types';
import ProjectCard from '../components/ProjectCard';

const Categories: Category[] = ['All', 'Web', 'Mobile', 'Data Analysis', 'Desktop'];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-[calc(100vh-80px)] px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl text-[#a87ebd] md:text-5xl font-bold mb-6 dark:text-white text-gray-500">Featured Work</h1>
          <p className="text-lg dark:text-gray-400 text-gray-600 max-w-xl mx-auto">
            A curated selection of projects demonstrating technical depth and practical application.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-[#d4a5e0] text-white shadow-lg shadow-[#d4a5e0]/20'
                  : 'glass dark:text-gray-400 text-gray-600 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl dark:text-gray-400 text-gray-600">No projects found in this category yet. Stay tuned!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
