import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {


const [isopen,setisopen]=useState(false);

function handleburger(){

    setisopen(!isopen)
}


  return (
    <div className=' fixed left-0 top-0 z-50 bg-black flex items-center justify-between px-5 text-white py-2 w-full border-b-[1px] border-gray-400 '>

      <div className='font-bold text-xl'>Portfolio</div>

      <div className='hidden md:flex'>
        <ul className='flex gap-5'>
          <li className=' hover:text-blue-500 cursor-pointer hover:underline text-gray-400'>
          <Link to="about" smooth={true} duration={500}>About</Link>
            </li>
          <li className=' hover:text-blue-500 cursor-pointer hover:underline text-gray-400'>
          <Link to="skill" smooth={true} duration={500}>Skills</Link></li>
          <li className=' hover:text-blue-500 cursor-pointer hover:underline text-gray-400'>
          <Link to="edu" smooth={true} duration={500}>Education</Link></li>
          <li className=' hover:text-blue-500 cursor-pointer hover:underline text-gray-400'>
          <Link to="contact" smooth={true} duration={500}>Contact Me</Link></li>
        </ul>
      </div>

      <div className='hidden md:flex'>
<a href="https://www.linkedin.com/in/siddhantsinghrathoria" target='_blank' className='bg-blue-600 rounded-lg hover:bg-blue-900 px-3 py-2'>Linkedin Profile</a>
      </div>

      <div className='md:hidden text-2xl'>

      <GiHamburgerMenu onClick={handleburger} className='cursor-pointer' />


{isopen &&
 <div>
    <ul className='flex flex-col absolute top-11 right-0 gap-5 bg-black
     border-gray-500 border p-9 rounded-bl-xl rounded-br-xl rounded-tl-xl '>
       <RxCross1  className='cursor-pointer hover:text-blue-600 ' onClick={handleburger}/>
          <li className=' hover:text-blue-500 font-semibold cursor-pointer hover:underline text-white'>
          <Link to="about" smooth={true} duration={500}>About</Link>
            </li>
          <li className=' hover:text-blue-500  font-semibold cursor-pointer hover:underline text-white'>
          <Link to="skill" smooth={true} duration={500}>Skills</Link></li>
          <li className=' hover:text-blue-500 font-semibold cursor-pointer hover:underline text-white'>
          <Link to="edu" smooth={true} duration={500}>Education</Link></li>
          <li className=' hover:text-blue-500 font-semibold cursor-pointer hover:underline text-white'>
          <Link to="contact" smooth={true} duration={500}>Contact Me</Link></li>
        </ul>      
</div> }
      
      </div>

    </div>
  )
}

export default Navbar