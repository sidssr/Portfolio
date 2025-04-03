import React from 'react'
import sid from "../assets/sid.jpg"
import {motion} from "framer-motion"
import { Link } from 'react-scroll'

const About = () => {
  return (
    <div className='Home px-16 flex min-h-screen w-full items-center justify-center py-28'>
       
        <div className='text-white flex flex-col md:flex-row-reverse items-center justify-center gap-10 md:gap-70 '>
        
        <motion.div
        initial={{y:-50,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:0.8,delay:0.2}}

        
        >
          <img src={sid} alt="" className='w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 hover:shadow-indigo-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-5 hover:scale-105 md:w-[500px]' />
        </motion.div>

         <motion.div 
         
         initial={{y:50,opacity:0}}
         animate={{y:0,opacity:1}}
         transition={{duration:0.8,delay:0.2}}
 
         
         
         className='flex  max-w-[600px] flex-col items-center justify-center gap-3 text-center'>
          <h1 className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent  text-5xl  font-semibold md:text-5xl'>Siddhant Singh Rathoria</h1>

          <p className='text-pretty text-gray-300 py-2 md:text-xl'>I am a motivated and versatile web developer, always eager to take on new challenges. With a problem solving mindset and a passion for learning,I strive to build responsive and user friendly websites. Dedicated to delivering high quality results, I embrace a growth mindset to continously improve and innovate🚀 </p>
          <div className='flex gap-4'>
          <button className='bg-pink-600 rounded-lg p-2  cursor-pointer hover:bg-pink-700 '>
            <a href="https://drive.google.com/file/d/1kFOP2giwWCu6UQp19udM8XAVr3vHpnOA/view?usp=sharing" target='_blank'>
            View Resume
            </a>
           </button>
          <ul>
          <li className='border border-pink-600 rounded-lg p-2 cursor-pointer hover:text-gray-300'>
             <Link to="Contact" smooth={true} duration={500}>Contact Me</Link>
            </li>
          </ul>
         
          </div>
        
         </motion.div>

        </div>




    </div>
  )
}

export default About
