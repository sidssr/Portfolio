import { motion } from 'framer-motion';
import React from 'react';

const Contact = () => {
  return (
    <div className='Contact min-h-[50vh] w-full flex items-center justify-center'>
      
      <motion.div 
        className='flex flex-col space-y-6 p-14 justify-center items-center'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        
        {/* Animated Heading */}
        <motion.h1 
          className='text-5xl md:text-7xl bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent'
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Get In Touch
        </motion.h1>

        {/* Description */}
        <motion.p 
          className='text-gray-400 text-center text-lg font-semibold py-5 max-w-[600px]'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Send an Email through this button and I'll respond as soon as possible.
        </motion.p>

        {/* Animated Contact Button */}
        <motion.button 
          onClick={() => window.location.href="mailto:siddhantrathoria18@gmail.com"} 
          className='bg-black text-white px-6 py-3 rounded-lg font-semibold cursor-pointer border border-transparent transition-all duration-300
          hover:bg-indigo-500 hover:text-white hover:border-indigo-400 shadow-md hover:shadow-indigo-500/50'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Contact Me
        </motion.button>

      </motion.div>
    </div>
  );
};

export default Contact;
