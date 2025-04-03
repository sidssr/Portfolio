import { div } from 'framer-motion/m';
import React, { useState } from 'react'
import { BiMenu, BiX } from 'react-icons/bi';
import { BsGithub, BsLinkedin, BsTwitter, BsTwitterX } from 'react-icons/bs'
import { Link } from 'react-scroll';

const Navbar = () => {

const[isopen,setisopen]=useState(false);

function menuopen(){
  setisopen(!isopen);
}

  return (
    <div className='fixed top-0 z-10 flex w-full items-center justify-between border-b border-gray-600 bg-black/80 px-5 py-4 text-white
    '>
      <a href="#home" className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-4xl font-semibold transition-all duration-300 hover:opacity-100' >Siddhant</a>
    
    <ul className='hidden md:flex gap-10 '>
      <li className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 text-lg'>
        
      <Link to="Home" smooth={true} duration={500}>Home</Link>
         </li>
      <li className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 text-lg'>
      <Link to="Skills" smooth={true} duration={500}>Skills</Link>
        </li>
      <li className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 text-lg'>
      <Link to="Education" smooth={true} duration={500}>Education</Link>
      </li>
      <li className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 text-lg'>
      <Link to="Projects" smooth={true} duration={500}>Projects</Link>
      </li>
      <li className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 text-lg'>
      <Link to="Contact" smooth={true} duration={500}>Contact</Link>
      </li>
    </ul>
    
    <ul className='hidden md:flex gap-5'>
      <li className='cursor-pointer text-2xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100 '>
       <a href="https://www.linkedin.com/in/siddhantsinghrathoria" target='_blank'>
       <BsLinkedin/></a>

      </li>

      <li className='cursor-pointer text-2xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100'>
     <a href="https://x.com/heysid_ssr" target='_blank'>
     <BsTwitterX/>
     </a>
       
      </li>
      <li className='cursor-pointer text-2xl opacity-70 transition-all duration-300 hover:text-green-500 hover:opacity-100'>
      <a href="https://github.com/sidssr" target='_blank'>  <BsGithub/></a>
       
      </li>

    </ul>
      {
        isopen? (
          <BiX className='block md:hidden text-4xl cursor-pointer' onClick={menuopen}/>
        ):(
          <BiMenu className='block  md:hidden text-4xl cursor-pointer ' onClick={menuopen}/>
        )
      }
   
   {isopen && (
    <div className='fixed right-0 top-[70px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-1 border-gray-800 bg-black/90 p-12  md:hidden'>
      <ul className='flex flex-col gap-10 '>

    
       <li className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 text-xl'>
       <Link to="Home" smooth={true} duration={500}>Home</Link>
       </li>
      <li className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 text-xl'>
      <Link to="Skills" smooth={true} duration={500}>Skills</Link>
      </li>
      <li className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 text-xl'>
      <Link to="Education" smooth={true} duration={500}>Education</Link>
      </li>
      <li className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 text-xl'>
      <Link to="Projects" smooth={true} duration={500}>Projects</Link>
      </li>
      <li className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 text-xl'>
      <Link to="Contact" smooth={true} duration={500}>Contact Me</Link>
      </li>
      </ul>
      <ul className='flex flex-wrap gap-5'>
      <li className='cursor-pointer text-3xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100 '>
      <a href="https://www.linkedin.com/in/siddhantsinghrathoria" target='_blank'>
      <BsLinkedin/></a>
      </li>

      <li className='cursor-pointer text-3xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100'>
      <a href="https://x.com/heysid_ssr" target='_blank'> <BsTwitterX/></a>
      </li>
      <li className='cursor-pointer text-3xl opacity-70 transition-all duration-300 hover:text-green-500 hover:opacity-100'>
      <a href="https://github.com/sidssr" target='_blank'>  <BsGithub/></a>
      </li>

    </ul>

    </div>

   )}
  
    
    
    </div>
  )
}

export default Navbar
