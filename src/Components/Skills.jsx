import React from 'react';
import { 
  BiLogoCPlusPlus, BiLogoCss3, BiLogoFirebase, 
  BiLogoHtml5, BiLogoJavascript, BiLogoMongodb, 
  BiLogoNodejs, BiLogoReact, BiLogoTailwindCss 
} from 'react-icons/bi';
import { motion } from 'framer-motion';

const iconVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.15, duration: 0.5 }
  })
};

const skillsData = [
  { icon: <BiLogoCPlusPlus className='text-sky-500' />, color: 'text-sky-500' },
  { icon: <BiLogoHtml5 className='text-orange-500' />, color: 'text-orange-500' },
  { icon: <BiLogoTailwindCss className='text-green-500' />, color: 'text-green-500' },
  { icon: <BiLogoJavascript className='text-yellow-500' />, color: 'text-yellow-500' },
  { icon: <BiLogoReact className='text-blue-500' />, color: 'text-blue-500' },
  { icon: <BiLogoFirebase className='text-orange-500' />, color: 'text-orange-500' },
  { icon: <BiLogoNodejs className='text-green-600' />, color: 'text-green-600' },
  { icon: <BiLogoMongodb className='text-green-700' />, color: 'text-green-700' }
];

const Skills = () => {
  return (
    <div className='Skills flex min-h-[70vh] w-full flex-col items-center justify-center gap-10 p-10'>
      
      {/* Animated Title */}
      <motion.h1 
        className='text-5xl font-light text-white'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        Technologies
      </motion.h1>

      {/* Animated Skills Icons */}
      <div className='flex flex-wrap items-center justify-center gap-10 p-5'>
        {skillsData.map((skill, index) => (
          <motion.div 
            key={index}
            className={`cursor-pointer text-[80px] transition-all duration-300 hover:-translate-y-5 ${skill.color}`}
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            custom={index}
          >
            {skill.icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
