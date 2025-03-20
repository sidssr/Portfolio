import React from 'react'

const Contact = () => {
  return (
    <div className='text-center py-20 bg-black contact '>
      

      <div>
      <h1 className='text-3xl font-semibold text-blue-500'>Contact Me</h1>
      <p className='py-3 text-gray-400'>Feel free to reach out to me for any questions or opportunities!</p>
      </div>

        <div className='border flex flex-col w-1/3 mx-auto my-1 py-4 px-4 gap-6'>
            <input type="text" placeholder='Your Name' className='border border-gray-400 px-4 py-1 rounded-lg placeholder:text-gray-400 text-white' />
            <input type="text " placeholder='Your Email' className=' border border-gray-400 px-4 py-1 rounded-lg placeholder:text-gray-400 text-white' />
            <input type="text" placeholder='Your Message' className=' border border-gray-400 px-4 pb-25  rounded-lg  md:w-[380px] md:h-[150px] h-[150px] min-w-[150px] align-top text-left  placeholder:text-gray-400 text-white' />
           
        </div>

<div>
    <button className='bg-blue-600 px-[170px] py-2 rounded-lg text-white cursor-pointer hover:bg-blue-800'>Send</button>
</div>


    </div>
  )
}

export default Contact
