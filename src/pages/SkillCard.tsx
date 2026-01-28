// // import { motion } from 'framer-motion';
// // import { Layout, Smartphone, PieChart } from 'lucide-react';// Ensure aapne constants mein data rakha hai
// // import { SKILLS_DATA } from '../constants';
// // const SkillCards = () => {
// //   return (
// //     // "w-full max-w-7xl" side-by-side laane ke liye zaroori hai
// //     <div className="w-full max-w-7xl mx-auto px-4 py-1">
// //      {/* // Is line ko dhonrhen aur replace karein: */}
// // <div className="grid grid-cols-3 md:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
// //         {SKILLS_DATA.map((skill, index) => (
// //           <motion.div
// //             key={index}
// //             whileHover={{ y: -10, rotateX: 2, rotateY: 2 }}
// //             className={`relative glass p-8 rounded-[2rem] border border-white/20 overflow-hidden group shadow-2xl transition-all duration-500 bg-white/5 ${skill.glow}`}
// //           >
// //             {/* Custom Theme Dots (Lilac, Teal, Pink) */}
// //             <div className="absolute top-5 left-6 flex gap-2">
// //               <div className="w-3 h-3 rounded-full bg-[#d4a5e0]" title="Lilac" />
// //               <div className="w-3 h-3 rounded-full bg-[#2dd4bf]" title="Teal" />
// //               <div className="w-3 h-3 rounded-full bg-pink-400" />
// //             </div>

// //             <div className="relative z-10 flex flex-col items-center text-center mt-6">
// //               <div className="p-4 bg-white/10 rounded-2xl mb-5">
// //                 {/* Icon logic based on title */}
// //                 {skill.title === "Data Science" && <PieChart className="w-10 h-10 text-[#d4a5e0]" />}
// //                 {skill.title === "App Development" && <Smartphone className="w-10 h-10 text-[#2dd4bf]" />}
// //                 {skill.title === "Web Development" && <Layout className="w-10 h-10 text-blue-400" />}
// //               </div>

// //               <h3 className="text-2xl font-bold text-gray-500 dark:text-white mb-2">{skill.title}</h3>
// //               <p className="text-sm text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
// //                 {skill.desc}
// //               </p>

// //               {/* Glowing Progress Bar */}
// //               <div className="w-full bg-black/10 dark:bg-white/10 h-2.5 rounded-full overflow-hidden">
// //                 <motion.div
// //                   initial={{ width: 0 }}
// //                   whileInView={{ width: `${skill.progress}%` }}
// //                   transition={{ duration: 1.5 }}
// //                   className="h-full bg-gradient-to-r from-[#d4a5e0] to-[#2dd4bf] shadow-[0_0_10px_#d4a5e0]"
// //                 />
// //               </div>
// //               <span className="text-[11px] mt-3 font-bold tracking-widest text-gray-500 dark:text-white/60">
// //                 {skill.progress}% COMPLETE
// //               </span>
// //             </div>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };
// // export default SkillCards;
// import { motion } from 'framer-motion';
// import { Layout, Smartphone, PieChart } from 'lucide-react';
// import { SKILLS_DATA } from '../constants';

// const SkillCards = () => {
//   return (
//     <div className="w-full max-w-7xl mx-auto px-4 py-1">
//       {/* Grid Fix: Mobile par 1 column, Tablet par 2, Desktop par 3 */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
//         {SKILLS_DATA.map((skill, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ y: -10, rotateX: 2, rotateY: 2 }}
//             className={`relative glass p-6 sm:p-8 rounded-[2rem] border border-white/20 overflow-hidden group shadow-2xl transition-all duration-500 bg-white/5 ${skill.glow}`}
//           >
//             {/* Custom Theme Dots (Sab Lilac/Purple family mein) */}
//             <div className="absolute top-5 left-6 flex gap-2">
//               <div className="w-3 h-3 rounded-full bg-[#C084FC]" title="Lilac" />
//               <div className="w-3 h-3 rounded-full bg-[#E9D5FF]" title="Light Lilac" />
//               <div className="w-3 h-3 rounded-full bg-[#D8B4FE]" title="Soft Purple" />
//             </div>

//             <div className="relative z-10 flex flex-col items-center text-center mt-6">
//               <div className="p-4 bg-white/10 rounded-2xl mb-5">
//                 {/* Icons with Lilac Theme */}
//                 {skill.title === "Data Science" && <PieChart className="w-10 h-10 text-[#C084FC]" />}
//                 {skill.title === "App Development" && <Smartphone className="w-10 h-10 text-[#C084FC]" />}
//                 {skill.title === "Web Development" && <Layout className="w-10 h-10 text-[#C084FC]" />}
//               </div>

//               {/* Title Fix: Responsive font size and word wrap */}
//               <h3 className="text-xl sm:text-2xl font-bold text-gray-700 dark:text-white mb-2 break-words w-full px-2">
//                 {skill.title}
//               </h3>
              
//               <p className="text-sm text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
//                 {skill.desc}
//               </p>

//               {/* Glowing Progress Bar with Lilac Gradient */}
//               <div className="w-full bg-black/10 dark:bg-white/10 h-2.5 rounded-full overflow-hidden">
//                 <motion.div
//                   initial={{ width: 0 }}
//                   whileInView={{ width: `${skill.progress}%` }}
//                   transition={{ duration: 1.5 }}
//                   className="h-full bg-gradient-to-r from-[#C084FC] to-[#E9D5FF] shadow-[0_0_10px_#C084FC]"
//                 />
//               </div>
              
//               <span className="text-[11px] mt-3 font-bold tracking-widest text-gray-500 dark:text-white/60 uppercase">
//                 {skill.progress}% Complete
//               </span>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SkillCards;
import { motion } from 'framer-motion';
import { Layout, Smartphone, PieChart } from 'lucide-react';
import { SKILLS_DATA } from '../constants';

const SkillCards = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Grid: Desktop (lg) par 3, Tablet (md) par 2, Mobile par 1 column */}
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {SKILLS_DATA.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className={`relative glass p-8 rounded-[2.5rem] border border-white/20 overflow-hidden group shadow-2xl bg-white/5 ${skill.glow}`}
          >
            {/* Dots - Wapis Teal aur Lilac combination */}
            <div className="absolute top-6 left-8 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#d4a5e0]" />
              <div className="w-3 h-3 rounded-full bg-[#2dd4bf]" />
              <div className="w-3 h-3 rounded-full bg-pink-400" />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center mt-6">
              <div className="p-5 bg-white/10 rounded-2xl mb-6">
                {/* Icons Colors Reverted */}
                {skill.title === "Data Science" && <PieChart className="w-12 h-12 text-[#d4a5e0]" />}
                {skill.title === "App Development" && <Smartphone className="w-12 h-12 text-[#2dd4bf]" />}
                {skill.title === "Web Development" && <Layout className="w-12 h-12 text-blue-400" />}
              </div>

              <h3 className="text-2xl font-bold text-gray-700 dark:text-white mb-3 tracking-tight">
                {skill.title}
              </h3>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-10 leading-relaxed max-w-[250px]">
                {skill.desc}
              </p>

              {/* Progress Bar - Reverted to Teal/Lilac Gradient */}
              <div className="w-full bg-gray-200 dark:bg-white/10 h-2.5 rounded-full overflow-hidden shadow-inner">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.progress}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-[#d4a5e0] to-[#2dd4bf] shadow-[0_0_15px_#d4a5e0]"
                />
              </div>
              
              <span className="text-[11px] mt-4 font-black tracking-[0.2em] text-gray-400 dark:text-white/60 uppercase">
                {skill.progress}% Complete
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillCards;