
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';
import {  CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const socials = [
    { 
      icon: <Github size={48} />, 
      link: 'https://github.com/NoorUlAein-DS', 
      name: 'GitHub', 
      hoverColor: 'hover:text-[#181717] dark:hover:text-white' 
    },
    { 
      icon: <Linkedin size={48} />, 
      link: 'https://www.linkedin.com/in/noor-ul-aein-salamat-khan-7105323a2/', 
      name: 'LinkedIn', 
      hoverColor: 'hover:text-[#0077B5]' 
    },
    { 
      icon: <Instagram size={48} />, 
      link: 'https://www.instagram.com/noorulaein477/', 
      name: 'Instagram', 
      hoverColor: 'hover:text-[#E4405F]' 
    }
  ];
  const [isSent, setIsSent] = React.useState(false);
const [userName, setUserName] = React.useState("");

  return (
    <div className="min-h-[calc(100vh-80px)] px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl font-bold mb-4 dark:text-white text-gray-500">Let's Connect</h1>
              <p className="dark:text-gray-400 text-gray-600">Have a question or want to work together? Drop me a message.</p>
            </div>

            {!isSent ? (
  <form 
    className="space-y-4" 
    onSubmit={(e) => {
      e.preventDefault();
      const name = (e.currentTarget.elements[0] as HTMLInputElement).value;
      setUserName(name || "Friend");
      setIsSent(true);
    }}
  >
    {/* ... aapke purane inputs yahan ayenge ... */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <input type="text" placeholder="Your Name" required className="w-full glass p-4 rounded-2xl outline-none focus:ring-2 ring-[#d4a5e0]/50 dark:text-white transition-all border border-white/10" />
      <input type="email" placeholder="Email Address" required className="w-full glass p-4 rounded-2xl outline-none focus:ring-2 ring-[#d4a5e0]/50 dark:text-white transition-all border border-white/10" />
    </div>
    <input type="text" placeholder="Subject" className="w-full glass p-4 rounded-2xl outline-none focus:ring-2 ring-[#d4a5e0]/50 dark:text-white transition-all border border-white/10" />
    <textarea placeholder="Your Message" rows={5} className="w-full glass p-4 rounded-2xl outline-none focus:ring-2 ring-[#d4a5e0]/50 dark:text-white transition-all border border-white/10 resize-none" />
    
    <button type="submit" className="w-full py-4 bg-[#d4a5e0] hover:brightness-110 text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-2 group shadow-xl shadow-[#d4a5e0]/20">
      Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
    </button>
  </form>
) : (
  /* --- SUCCESS CARD UI --- */
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="glass p-10 rounded-[2.5rem] border border-white/20 text-center shadow-2xl relative overflow-hidden"
  >
    {/* Background Glow */}
    <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#d4a5e0] blur-[80px] opacity-30" />
    
    <div className="w-20 h-20 bg-gradient-to-tr from-[#d4a5e0] to-[#2dd4bf] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
      <CheckCircle size={40} className="text-white animate-bounce" />
    </div>
    
    <h3 className="text-3xl font-extrabold text-gray-500 dark:text-white mb-2">
      Thank You, {userName}!
    </h3>
    <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
      Your message has been safely delivered. I'll get back to you with the same precision I apply to my data models.
    </p>
    
    <button 
      onClick={() => setIsSent(false)}
      className="px-8 py-3 glass dark:text-white text-gray-500 rounded-xl font-bold border border-white/20 hover:bg-white/5 transition-all"
    >
      Send Another Message
    </button>
  </motion.div>
)}
            {/* <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full glass p-4 rounded-2xl outline-none focus:ring-2 ring-[#d4a5e0]/50 dark:text-white transition-all border border-white/10"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full glass p-4 rounded-2xl outline-none focus:ring-2 ring-[#d4a5e0]/50 dark:text-white transition-all border border-white/10"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full glass p-4 rounded-2xl outline-none focus:ring-2 ring-[#d4a5e0]/50 dark:text-white transition-all border border-white/10"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full glass p-4 rounded-2xl outline-none focus:ring-2 ring-[#d4a5e0]/50 dark:text-white transition-all border border-white/10 resize-none"
              />
              <button className="w-full py-4 bg-[#d4a5e0] hover:brightness-110 text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-2 group shadow-xl shadow-[#d4a5e0]/20">
                Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form> */}
          </motion.div>

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="glass p-10 rounded-3xl border border-white/10 space-y-8">
              <h2 className="text-2xl font-bold dark:text-white mb-6">Contact Information</h2>
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-[#d4a5e0]/10 text-[#d4a5e0]"><MapPin size={24} /></div>
                <div>
                  <h4 className="font-bold dark:text-white">Location</h4>
                  <p className="text-sm dark:text-gray-400 text-gray-600">Karachi,Pakistan</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-teal-500/10 text-teal-500"><Mail size={24} /></div>
                <div>
                  <h4 className="font-bold dark:text-white">Email</h4>
                  <p className="text-sm dark:text-gray-400 text-gray-600">noorulaeinsalamatkhan@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-pink-500/10 text-pink-500"><Phone size={24} /></div>
                <div>
                  <h4 className="font-bold dark:text-white">Instagram</h4>
                  <p className="text-sm dark:text-gray-400 text-gray-600">noorulaein477</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold dark:text-white mb-6">Connect With Me</h2>
              <div className="flex gap-8 items-center">
                {socials.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.link}
                    whileHover={{ scale: 1.2 }}
                    className={`transition-all duration-300 dark:text-gray-500 text-gray-400 ${social.hoverColor}`}
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
