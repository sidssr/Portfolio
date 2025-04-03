import React from 'react'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import Education from './Components/Education'


const App = () => {
  return (
    

<>
<div class="fixed  -z-10 min-h-screen w-full items-center px-10 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_50%,#63e_100%)]"></div>


<div className='flex flex-col items-center px-4 md:px-8 lg:px-16'>
      <Navbar/>
      <About/>
      <Skills/>
      <Projects/>
      <Education/>
      <Contact/>
    </div>


</>


  
  )
}

export default App
