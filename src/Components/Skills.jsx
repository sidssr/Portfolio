import React from 'react'
import { BiLogoCPlusPlus, BiLogoCss3, BiLogoFirebase, BiLogoHtml5, BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoReact, BiLogoTailwindCss } from 'react-icons/bi'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <div className='Skills flex min-h-[70vh] w-full flex-col items-center justify-center gap-15 '>
      <motion.h1 className='text-5xl font-light text-white'>Technologies</motion.h1>

      <div className='flex flex-wrap items-center justify-center gap-6 p-5'>
       
       <div>
         <BiLogoCPlusPlus className='cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 '/>
       </div>
       <div>
         <BiLogoHtml5 className='cursor-pointer text-[80px] text-pink-500 transition-all duration-300 hover:-translate-y-5 '/>
       </div>
       <div>
         <BiLogoTailwindCss className='cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:-translate-y-5 '/>
       </div>
       <div>
         <BiLogoJavascript className='cursor-pointer text-[80px] text-yellow-500 transition-all duration-300 hover:-translate-y-5 '/>
       </div>
       <div>
         <BiLogoReact className='cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:-translate-y-5 '/>
       </div>
       <div>
         <BiLogoFirebase className='cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:-translate-y-5 '/>
       </div>
       <div>
        <BiLogoNodejs className='cursor-pointer text-[80px] text-purple-600 transition-all duration-300 hover:-translate-y-5'/>
       </div>
       <div>
        <BiLogoMongodb className='cursor-pointer text-[80px] text-green-600 transition-all duration-300 hover:-translate-y-5'/>
       </div>
       
       

       
    
      



      </div>
    </div>
  )
}

export default Skills
