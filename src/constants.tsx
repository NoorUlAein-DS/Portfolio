
import React from 'react';
import { Smartphone, PieChart, Monitor, Code } from 'lucide-react';
import type{ Project, Stat } from './types';

export const PROJECTS: Project[] = [
  // {
  //   id: 1,
  //   title: 'E-Commerce Analytics',
  //   category: 'Data Analysis',
  //   description: 'A deep dive into customer behavior and churn prediction for a global retailer.',
  //   tags: ['Python', 'Pandas', 'Scikit-learn', 'Tableau'],
  //   image: 'https://picsum.photos/seed/analytics/600/400',
  //    githubUrl: "https://github.com/NoorUlAein-DS/aein-talk",
  // liveUrl: "https://crypto-pulse-analytics-project.vercel.app/",
  // // videoUrl: "/AeinTalk.mp4"
  // },
  {
    id: 2, // Agar ye aapka main project hai
    title: 'AEIN TALK',
    category: 'Web',
    description: 'An intelligent communication platform merging real-time messaging with user engagement analytics.',
    tags: ['React', 'Node.js', 'Express', 'MySQL', 'Tailwind'],
    image: '/AeinTalk.png' ,// Yahan aap apni image ka path dalengi
    githubUrl: "https://github.com/NoorUlAein-DS/aein-talk",
  // liveUrl: "https://cryptopulse-demo.com",
  videoUrl: "/AeinTalk.mp4"
},
  {
    id: 3,
    title: 'COVID-19 Health Predictor',
    category: 'Data Analysis',
    description: 'An interactive risk assessment dashboard that predicts personal COVID-19 risk based on symptom intensity, combined with real-time global mortality insights and symptom prevalence patterns.',
   tags: [ 'Python', 'Streamlit', 'Machine Learning', 'Pandas', 'Scikit-Learn' ],
    image: 'Covid.png',
     githubUrl: "https://github.com/NoorUlAein-DS/-COVID-19-Prediction-Model",
  liveUrl: "https://teun2bymrou8crghowpb5l.streamlit.app/",
  // videoUrl: "/AeinTalk.mp4"
  },
 {
    id: 4,
    title: 'ProMode Study App',
    category: 'Mobile',
    description: 'A comprehensive productivity ecosystem featuring an integrated dictionary, real-time quote generation via API, and an AI-driven chatbot for interactive learning.',
    tags: ['Kotlin', 'Jetpack Compose', 'API Integration', 'Room'],
    image: '/study.jpeg',
    //  githubUrl: "https://github.com/NoorUlAein-DS/aein-talk",
  // liveUrl: "https://crypto-pulse-analytics-project.vercel.app/",
  videoUrl: "/Promod.mp4"
     // Apni app ka screenshot yahan dalen
  },
  {
    id: 1,
    title: 'Scanner App',
    category: 'Mobile',
    description: 'A high-performance Android application engineered for precision document scanning and dynamic QR code generation, optimizing mobile workflows through smart data archiving.',
    tags: ['Kotlin', 'Jetpack Compose', 'API Integration', 'Room'],
    image: '/scan.jpeg',
    //  githubUrl: "https://github.com/NoorUlAein-DS/aein-talk",
  // liveUrl: "https://crypto-pulse-analytics-project.vercel.app/",
  videoUrl: "/Promod.mp4"
     // Apni app ka screenshot yahan dalen
  },
  {
    id: 5,
    title: 'Electronic Mart Inventory System',
    category: 'Desktop',
    description: 'A specialized inventory management system for tech retail, handling high-value electronics like laptops and mobile phones with automated stock alerts and transaction tracking.',
    tags: ['Python', 'SQLite3', 'Database Design', 'Inventory Logic'],
    image: '/ElectroMart.png', 
    githubUrl: "https://github.com/NoorUlAein-DS/Electronic-Mart-Inventory-System",
  videoUrl: "/ElectroMart.mp4"
  },
  {
    id: 6, // Next ID
    title: 'K-Explorer',
    category: 'Web',
    description: 'A dynamic entertainment discovery platform utilizing TMDB APIs to deliver real-time data on trending K-Dramas, movies, and actors with a high-performance UI.',
    tags: ['TypeScript', 'React', 'Tailwind CSS', 'API Integration'],
    image: '/K-Exploree.png' ,
     githubUrl: "https://github.com/NoorUlAein-DS/k-explorer",
  liveUrl: "https://k-explorer-tc6o.vercel.app/",
  },
  {
    id: 7,
    title: 'CryptoPulse Analytics',
    category: 'Web',
    description: 'A real-time cryptocurrency tracking platform that transforms market noise into actionable knowledge. Features live price updates and 24-hour price fluctuation analysis using high-frequency APIs.',
    tags: ['React', 'Tailwind CSS', 'Crypto API', 'Data Visualization'],
    image: '/crypto.png' ,
     githubUrl: "https://github.com/NoorUlAein-DS/CryptoPulse-Analytics-Project",
  liveUrl: "https://crypto-pulse-analytics-project.vercel.app/",
  // videoUrl: "/AeinTalk.mp4"
  },
    {
    id: 8,
    title: 'Leave Management System',
    category: 'Desktop',
description: 'A professional enterprise utility built with Python and MySQL. Features an automated SMTP email notification system for real-time status updates and a structured database for high-integrity record keeping.',
    tags: ['React', 'Tailwind CSS', 'Crypto API', 'Data Visualization'],
    image: '/AeinLeavethree.png' ,
     githubUrl: "https://github.com/NoorUlAein-DS/Leave-Managment-System",
  liveUrl: "https://crypto-pulse-analytics-project.vercel.app/",
  // videoUrl: "/AeinTalk.mp4"
  },
];

export const QUICK_ACTIONS = [
  { title: 'Web Dev', icon: <Code className="w-10 h-10" />, color: 'bg-blue-500',description:"Building full-stack web applications with React, Node.js, and Express, integrated with MySQL databases." },
  { title: 'Android Apps', icon: <Smartphone className="w-10 h-10" />, color: 'bg-green-500',description: 'Developing cross-platform mobile apps with a focus on clean UI and performance.' },
  { title: 'Data Analysis', icon: <PieChart className="w-10 h-10" />, color: 'bg-[#d4a5e0]',description: 'Cleaning data, statistical modeling, and creating insights using Python and Pandas.' },
  { title: 'Desktop Apps', icon: <Monitor className="w-10 h-10" />, color: 'bg-teal-500',description: 'Creating powerful desktop automation tools and system-level applications with Python.' }
];

export const STATS: Stat[] = [
  { label: 'Projects Completed', value: '10+' },
  { label: ' Tools INTEGRATED' ,value: '10+' },
  { label: 'Year of Study', value: '2nd' }
];
export const SKILLS_DATA = [
  {
    title: "Data Science",
    progress: 65,
    desc: "ML Models for COVID-19 Prediction",
    iconName: "PieChart", // Hum string bhejenge taake mapping asaan ho
    color: "from-[#C084FC]/40 to-[#D8B4FE]/40 dark:from-[#C084FC]/20 dark:to-[#D8B4FE]/10",
    glow: "group-hover:shadow-purple-500/40"
  },
  {
    title: "App Development",
    progress: 45,
desc: "High-Performance Native Android Apps",
    iconName: "Smartphone",
   color: "from-[#C084FC]/40 to-[#D8B4FE]/40 dark:from-[#C084FC]/20 dark:to-[#D8B4FE]/10",
    glow: "group-hover:shadow-green-500/40"
  },
  {
    title: "Web Development",
    progress: 85,
 desc: "Responsive Web Apps with React & Modern UI",
    iconName: "Layout",
color: "from-[#C084FC]/40 to-[#D8B4FE]/40 dark:from-[#C084FC]/20 dark:to-[#D8B4FE]/10",
    glow: "group-hover:shadow-blue-500/40"
  }
];