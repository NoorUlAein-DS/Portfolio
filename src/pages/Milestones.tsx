
import React, { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, Star, Trophy, Target, Flag, User,Code,
  GraduationCap, FileDown, Eye, X, Award, Search,Briefcase,Presentation,BookOpen,
  ExternalLink, Download
} from 'lucide-react';

// Fix framer-motion type errors by casting to any
const MotionDiv = motion.div as any;
const MotionH1 = motion.h1 as any;
const MotionP = motion.p as any;
const MotionButton = motion.button as any;
const MotionA = motion.a as any; // Ye line MotionButton ke niche add kardein

interface MilestoneItem {
  id: number;
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}
const RESUME_URL = './ResumeNoorUlAein.pdf'; 

interface MilestoneItem {
  id: number;
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}
interface CertificateItem {
  id: number;
  title: string;
  issuer: string;
  image: string;
  date: string;
}

const MILESTONES: MilestoneItem[] = [
{
  id: 3,
  date: 'Current',
  title: 'Social Media Team Member',
  description: 'Currently working as a Social Media Team Member at Jinnah University for Women. Responsible for content planning, post management, and supporting digital engagement initiatives.',
  icon: <User className="w-6 h-6" />,
  category: 'Experience'
},
{
  id: 6,
  date: 'Oct 2025 - Dec 2025', // 4 months duration
  title: 'Teaching Assistant - Data Science',
  description: 'Assisting in a 4-month intensive Data Science course at AIT. Responsible for guiding students through Python libraries, data cleaning pipelines, and exploratory data analysis (EDA).',
  icon: <BookOpen className="w-6 h-6" />, // 'Users' icon professional lagta hai teaching ke liye
  category: 'Experience'
},
  {
    id: 2,
    date: 'January 2025',
    title: 'Summer Internship - Course Content Creator',
    description: 'Created structured course content using AI tools (GPT), including lesson plans, slides, quizzes, and learning material.Assisted in designing beginner-friendly and engaging educational content aligned with course objectives.',
    icon: <Briefcase className="w-6 h-6" />,
    category: 'Internship'
  },
{
  id: 4,
  date: 'January 2025',
  title: "Dean’s List – Academic Excellence",
  description: 'BS Data Science (2nd Year) student at Jinnah University for Women, studying core subjects including Java, Python, Data Structures, Calculus, ITCS, Statistics & Probability, Databases, and Digital Logic Design.',
  icon: <GraduationCap  className="w-6 h-6" />,
  category: 'Academic'
},

 {
  id: 6,
  date: 'July 2024',
  title: 'Completed One-Year Programming Course',
  description: 'Completed a one-year programming course from Portial Lab, learning Web Development technologies including HTML, CSS, Bootstrap, Tailwind CSS, TypeScript, Wordpress,React, Node.js, Express.js, MySQL, and SQLite.',
  icon:  <Code className="w-6 h-6 align-middle" />,
  category: 'Academic'
}

];

const CERTIFICATES: CertificateItem[] = [
  {
    id: 1,
    title: 'Course Content Creator Internship',
    issuer: 'Al-Khair Institute of Technology',
    date: 'April 2025',
    image: '/Internship.png' // Public folder mein is naam se rakhein
  },
  {
    id: 2,
    title: 'Year-Long Programming Course',
    issuer: 'Portia Lab / Idara Al-Khair',
    date: 'July 2024',
    image: '/Portial.png'
  },
  {
    id: 3,
    title: 'IT Customer Support Basics',
    issuer: 'Cisco Networking Academy',
    date: 'Dec 2025',
    image: '/Cisco.png'
  },
    
  {
    id: 4,
    title: 'IT Customer Support Basics',
    issuer: 'Cisco Networking Academy',
    date: 'Dec 2025',
    image: '/CERfour.png' // Based on your uploaded filename
  },
  {
    id: 5,
    title: 'Python for Data Science, AI & Development',
    issuer: 'IBM / Coursera',
    date: 'Dec 2025',
    image: '/CERfive.png' // Based on your uploaded filename
  }

];

const Milestones: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-[calc(100vh-80px)] px-6 py-12 md:py-24 overflow-x-hidden">
      <div className="max-w-4xl mx-auto space-y-32">
        
        {/* Header Section */}
        <div className="text-center">
          <MotionH1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-extrabold mb-8 dark:text-white text-gray-900"
          >
            Journey <span className="text-[#d4a5e0]">&</span> <span className="text-teal-500">Milestones</span>
          </MotionH1>
          <MotionP
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl dark:text-gray-400 text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed"
          >A journey of discipline, data, and the drive to build something better; where academic rigor meets technical excellence           </MotionP>
        </div>

        {/* Section 1: The Timeline */}
        <div className="relative">
          <h2 className="text-2xl font-bold mb-16 text-center dark:text-white text-gray-900 uppercase tracking-[0.3em]">
            Technical <span className="text-[#d4a5e0]">Timeline</span>
          </h2>
          
          <div className="absolute left-6 md:left-1/2 top-10 bottom-0 w-0.5 bg-gradient-to-b from-[#d4a5e0] via-teal-500/50 to-transparent opacity-20 transform -translate-x-1/2" />
          
          <div className="space-y-16">
            {MILESTONES.map((milestone, idx) => (
              <MotionDiv
                key={milestone.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="relative md:flex md:justify-center"
              >
                {/* Timeline Point */}
                <div className="absolute left-6 md:left-1/2 top-8 -translate-x-1/2 z-20">
                  <div className="w-7 h-7 rounded-full glass border-2 border-[#d4a5e0] flex items-center justify-center text-[#d4a5e0] bg-white dark:bg-[#0f0f0f] shadow-xl group hover:scale-110 transition-transform">
                    {milestone.icon}
                  </div>
                </div>

                {/* Card */}
                <div className="pl-16 md:pl-0 md:w-full md:max-w-md">
                  <div className="glass p-8 rounded-[2.5rem] border border-white/10 hover:border-[#d4a5e0]/40 transition-all duration-500 shadow-xl bg-white/5 dark:bg-white/[0.02] group">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-500 px-3 py-1 rounded-full bg-teal-500/10">
                        {milestone.category}
                      </span>
                      <span className="text-sm font-bold dark:text-gray-500 text-gray-400 font-mono">
                        {milestone.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold dark:text-white text-gray-900 group-hover:text-[#d4a5e0] transition-colors mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
{/* Section 2: Professional Resume Card */}
<div className="flex flex-col items-center">
  <h2 className="text-2xl font-bold mb-12 text-center dark:text-white text-gray-900 uppercase tracking-[0.3em]">
    Professional <span className="text-[#d4a5e0]">Credentials</span>
  </h2>
  
  <MotionDiv 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="w-full max-w-2xl"
  >
    <div className="glass p-10 md:p-14 rounded-[3rem] border border-[#d4a5e0]/30 shadow-2xl relative overflow-hidden group bg-gradient-to-br from-white/5 to-transparent dark:from-white/[0.03] dark:to-transparent">
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#d4a5e0]/10 blur-[80px] rounded-full group-hover:bg-[#d4a5e0]/20 transition-all duration-1000" />
      
      <div className="flex flex-col items-center text-center space-y-8">
        <div className="p-6 rounded-3xl bg-[#d4a5e0]/10 text-[#d4a5e0] border border-[#d4a5e0]/20">
          <Award size={48} strokeWidth={1.5} />
        </div>
        
        <div className="space-y-4">
          <h3 className="text-3xl md:text-4xl font-extrabold dark:text-white text-gray-900">
            Professional Resume
          </h3>
          <p className="text-base md:text-lg dark:text-gray-400 text-gray-600 leading-relaxed max-w-lg font-medium">
            Data Science student with expertise in Python, SQL, and Web development.
          </p>
        </div>

        {/* YE BUTTONS AB CARD KE ANDAR HAIN */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full relative z-10">
          <MotionA
            href={RESUME_URL}
            download="ResumeNoorUlAein.pdf"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-3 px-8 py-5 bg-[#d4a5e0] text-white rounded-2xl font-bold shadow-lg shadow-[#d4a5e0]/30 hover:brightness-110 transition-all text-base no-underline cursor-pointer"
          >
            <Download size={20} />
            Download Resume
          </MotionA>
          
          <MotionA
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-3 px-8 py-5 glass dark:text-white text-gray-900 rounded-2xl font-bold border border-white/20 hover:bg-white/10 dark:hover:bg-white/5 transition-all text-base no-underline cursor-pointer"
          >
            <Eye size={20} />
            View Fullscreen
          </MotionA>
        </div>
      </div>
    </div>
  </MotionDiv>
</div>

        {/* Section 3: Certifications Grid */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-16 text-center dark:text-white text-gray-900 uppercase tracking-[0.3em]">
            Verified <span className="text-[#d4a5e0]">Certificates</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {CERTIFICATES.map((cert, idx) => (
              <MotionDiv
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setSelectedImage(cert.image)}
                className="group cursor-pointer"
              >
                <div className="glass p-6 rounded-[2.5rem] border border-white/10 hover:border-[#d4a5e0]/50 transition-all duration-500 bg-white/5 dark:bg-white/[0.02]">
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden relative mb-6 shadow-lg border border-white/5">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="p-4 bg-white/20 backdrop-blur-xl rounded-full text-white scale-90 group-hover:scale-100 transition-transform duration-300">
                        <Search size={28} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold dark:text-white text-gray-900 text-lg group-hover:text-[#d4a5e0] transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-sm dark:text-gray-500 text-gray-400 font-medium">{cert.issuer}</p>
                    </div>
                    <span className="text-[10px] font-bold text-teal-500 font-mono border border-teal-500/20 px-2 py-1 rounded-md">
                      {cert.date}
                    </span>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>

        {/* Closing Quote/Status */}
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center py-20 border-t border-dashed border-white/10"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass border border-[#d4a5e0]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#d4a5e0] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest dark:text-gray-400 text-gray-600">The future isn’t forecasted, it’s learned through data.</span>
          </div>
          <p className="text-lg italic dark:text-gray-500 text-gray-400 max-w-xl mx-auto">
            "The goal is not to predict the future, but to create a model that is robust enough to adapt to it."
          </p>
        </MotionDiv>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-2xl"
            onClick={() => setSelectedImage(null)}
          >
            <MotionDiv
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[85vh] flex items-center justify-center"
              onClick={(e: any) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-16 right-0 p-3 text-white hover:text-[#d4a5e0] transition-all bg-white/5 rounded-full border border-white/10 group"
              >
                <X size={32} className="group-hover:rotate-90 transition-transform" />
              </button>
              
              <div className="w-full h-full glass border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative">
                <img 
                  src={selectedImage} 
                  alt="Fullscreen Certificate" 
                  className="w-full h-full object-contain"
                />
                {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
                  <button className="flex items-center gap-2 px-6 py-3 glass text-white rounded-xl font-bold border border-white/10 hover:bg-white/10 transition-all text-sm">
                    <Download size={18} /> Download
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 glass text-white rounded-xl font-bold border border-white/10 hover:bg-white/10 transition-all text-sm">
                    <ExternalLink size={18} /> Verify Link
                  </button>
                </div> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  {/* FUNCTIONAL DOWNLOAD LINK */}
                  {/* <MotionA
                    href={RESUME_URL}
                    download="ResumeNoorUlAein.pdf"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-3 px-8 py-5 bg-[#d4a5e0] text-white rounded-2xl font-bold shadow-lg shadow-[#d4a5e0]/30 hover:brightness-110 transition-all text-base decoration-none"
                  >
                    <Download size={20} />
                    Download CV
                  </MotionA>
                  
                  <MotionA
                    href={RESUME_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-3 px-8 py-5 glass dark:text-white text-gray-900 rounded-2xl font-bold border border-white/20 hover:bg-white/10 dark:hover:bg-white/5 transition-all text-base decoration-none"
                  >
                    <Eye size={20} />
                    View Fullscreen
                  </MotionA> */}
                </div>
              </div>
            </MotionDiv>
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Milestones;
