import React from 'react'

const Education = () => {


const edu=[
    {
        std:"Jss Academy of Technical Education ",
        name:"Bachelor of Technology in Computer Science",
        year:"2021-2025",
        grade:"Grade: 7.9",
        
          
    },

    {
        std:"Class 12",
        name:"Dav Public School , CBSE",
        year:"2019-2020",
        grade:"Grade: 93.6 %" ,

    },
    {
        std:"Class 10",
        name:"Dav Public School , CBSE",
        year:"2017-2018",
        grade:"Grade: 91.3 %"
    }
]



  return (
    <div className=' py-16 bg-black edu'>
      
            <div className='text-center'>
                <h1 className='text-4xl font-bold text-blue-500'>EDUCATION</h1>
            </div>

            <div className='py-4 flex flex-col gap-7  items-center  '>
                {
                      edu.map((ele , index)=>(
                        <div key={index} className= 'border border-gray-400 rounded-xl w-[450px] text-white py-4 '>
                        <h1  className='text-2xl text-left px-4 py-1 ' >{ele.std}</h1>
                        <h2 className='text-left px-4 py-1 text-gray-400' >{ele.name}</h2>
                        <h3 className='text-left px-4 py-1 text-gray-400' >{ele.year}</h3>
                        <h4 className='text-left px-4 py-1 text-gray-400' >{ele.grade}</h4>
                        </div>
                      ))





                }
            </div>


    </div>
  )
}

export default Education
