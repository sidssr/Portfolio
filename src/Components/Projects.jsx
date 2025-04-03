import React from 'react';
import tracker from '../assets/trackerapp.webp';
import chat from '../assets/chatapp.jpg';
import portfolio from '../assets/portfolio.jpg';
import travel from '../assets/travel.jpg';



const projectdata = [
  {
    image:travel,
    title:"SnapDiary App",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore similique soluta reiciendis voluptates cum explicabo officia ex, sint saepe impedit? Quasi corrupti beatae doloremque mollitia possimus qui at expedita dolor?",
    technologies:["React","Tailwind CSS","NodeJs","MongoDb","JWT",]
  },
  {
    image:chat,
    title: "Real Time Chat App",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatem! Recusandae accusamus, deleniti suscipit numquam ipsum ut est enim velit. Porro enim laborum reprehenderit tenetur accusantium totam officiis dicta ipsa!",
    technologies: ["React", "Tailwind CSS", "Firebase"],
  },
  {
    image:tracker,
    title: "Expense Tracker App",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus error, deleniti cum rem in voluptate aliquid blanditiis debitis iure vitae nihil facilis eos neque totam magni tempora fuga tenetur consequatur.",
    technologies: ["React", "Tailwind CSS"],
  },

  {
    image:portfolio,
    title:"Personal Portfolio",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas ex, reiciendis maiores earum sunt cum dolor, officia laboriosam nihil corporis quia quod quaerat quam amet ipsam! Dolorem maiores dignissimos fugiat?",
    technologies:["React","TailWind CSS"]
  }
];

function ProjectCard({ project }) {
  return (
    <div className=" Projects flex flex-col md:flex md:flex-row  items-center gap-8">
      <img
        src={project.image}
        alt={project.description}
        className=" w-[450px] md:w-[300px] cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105"
      />
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="text-xl font-semibold">{project.title}</div>
          <p className="text-gray-400">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-5">
          {project.technologies.map((tech, index) => (
            <span key={index} className="rounded-lg bg-black p-3">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const Projects = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 ">
      <h1 className="text-4xl font-light text-white">My Projects</h1>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectdata.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
