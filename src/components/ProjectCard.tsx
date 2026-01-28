
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github ,PlayCircle} from 'lucide-react';
import type { Project } from '../types';
interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -8 }}
      className="glass rounded-3xl overflow-hidden group border border-white/10"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
          <div className="flex gap-3">
            {/* <button className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 text-white">
              <Github size={20} />
            </button>
            <button className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 text-white">
              <ExternalLink size={20} />
            </button> */}
            <div className="flex gap-3">
  {project.githubUrl && (
    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 text-white transition-colors">
      <Github size={20} />
    </a>
  )}
  {project.liveUrl && (
    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 text-white transition-colors">
      <ExternalLink size={20} />
    </a>
  )}
  {project.videoUrl && (
    <a href={project.videoUrl} target="_blank" rel="noreferrer" className="p-2 bg-[#d4a5e0]/40 backdrop-blur-md rounded-full hover:bg-[#d4a5e0]/60 text-white transition-colors" title="Watch Demo">
      <PlayCircle size={20} />
    </a>
  )}
</div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="text-xs font-bold text-[#d4a5e0] uppercase tracking-widest mb-2">
          {project.category}
        </div>
        <h3 className="text-xl font-bold mb-3 dark:text-white text-gray-900">{project.title}</h3>
        <p className="text-sm dark:text-gray-400 text-gray-600 mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-1 rounded-md glass font-medium dark:text-teal-400 text-teal-700"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
      
    </motion.div>
  );
};

export default ProjectCard;
