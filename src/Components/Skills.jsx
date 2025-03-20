import React from 'react'

const Skills = () => {

const data=[
    {
        category:"Languages",
        skills:["C","C++","SQL"]
    },
     
    {
        category:"Frontened",
        skills:["HTML","CSS","Javascript","React","Tailwind CSS"]
    },

    {
        category:"Other Skills",
        skills:["Data Structures","Algorithms","Problem Solver"]
    },

    {
        category:"Coursework",
        skills:["Computer Network","Operating System","DBMS","OOPS"]
    }
]



  return (
    <div className='text-center py-16  bg-black skill'>
      
    <div>
      <h1 className='font-bold text-4xl mb-4 text-blue-600'>Skills</h1>
      <p className='text-xl mb-3 text-gray-500'>Here are some of my skills on which I have been working on</p>
      </div>


      <div className='flex flex-wrap justify-center gap-6 px-10 py-4 '>
       {data.map((element,index) => (
          <div key={index} className='border-[1px] border-gray-400 py-4 rounded-lg w-[250px] flexflex-col justify-center items-center'>
              <h1 className='font-semibold text-xl mb-3 text-white'>{element.category}</h1>
            
            <div className='flex flex-wrap gap-3 px-4 py-5'> 
            
            { element.skills.map((skill,i)=>(
                <span key={i} className='border rounded-md px-2 py-1 text-blue-500'>{skill}</span>
              ))
          }
          </div>
          
          </div>
       ))
      }
      </div>

</div>
  )
}

export default Skills
