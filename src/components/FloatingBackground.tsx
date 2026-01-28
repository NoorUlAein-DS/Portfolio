
import React from 'react';
import { motion } from 'framer-motion';

const FloatingBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden w-full h-full">
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] left-[-5%] w-64 h-64 rounded-full bg-[#d4a5e0]/20 blur-[100px]"
      />
      <motion.div
        animate={{
          y: [0, 50, 0],
          x: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[20%] right-[-5%] w-96 h-96 rounded-full bg-teal-500/10 blur-[120px]"
      />
      <motion.div
        animate={{
          rotate: [360, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[40%] left-[50%] w-48 h-48 border border-[#d4a5e0]/10 rounded-xl blur-sm"
      />
    </div>
  );
};

export default FloatingBackground;
