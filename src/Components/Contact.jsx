import { div } from 'framer-motion/m'
import React from 'react'

const Contact = () => {
  return (

    <div className='Contact  min-h-[50vh] min-w-full flex items-center justify-center '>

  
    <div className='flex flex-col  space-y-4 p-14 justify-center items-center'>
      
          <div className='text-center'>
            <h1 className='text-5xl md:text-7xl bg-gradient-to-r from-indigo-500 to to-blue-500 bg-clip-text text-transparent'> Get In Touch</h1>
            <p className='text-gray-400 text-center text-lg font-semibold py-10'>Send an Email through this button and I'll respond as soon as possible. </p>
          </div>

          <div>
            <button onClick={()=>window.location.href="mailto:siddhantrathoria18@gmail.com"} className='bg-black text-white px-5 py-3 rounded-md font-semibold cursor-pointer hover:border '>Contact Me</button>
          </div>

    </div>

    </div>
  )
}

export default Contact
