import React from "react";
import sid from '../assets/sid.jpg'

const About = () => {
  return (
    <div className="about pt-14 flex flex-col-reverse md:flex-row justify-around items-center min-h-screen bg-black  overflow-x-hidden w-full">
      
      {/*left div*/}
      <div className="max-w-[50%] text-left mb-10 " >
        <div>
          <h1 className="font-bold text-5xl text-white">
            <span className="block mb-2">Hi, I'm</span>
            <span className="block" >Siddhant Singh Rathoria</span>
          </h1>
          <p className="py-3 text-gray-500 leading-relaxed">I am a motivated and versatile web developer, always eager to take on new challenges. With a problem-solving mindset and a passion for learning, I strive to build responsive and user-friendly websites. Dedicated to delivering high-quality results, I embrace a growth mindset to continuously improve and innovate." 🚀</p>
        </div>
        <div className="flex items-center gap-4 mt-2">
         
          <a href="https://drive.google.com/file/d/1TaPKGU5TEkcQflLufurDJz8L-wW6Y8Ed/view?usp=sharing" target="_blank" className="text-white cursor-pointer hover:bg-blue-900 bg-blue-600 px-3 py-1 rounded-xl">Resume</a>
        </div>
      </div>

      {/*right div*/}
      <div>
        <img src={sid} className=" rounded-full w-[330px]" alt="siddhant image" />
        Siddhant image
      </div>



    </div>
  );
};

export default About;
