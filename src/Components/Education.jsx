import React from "react";
import { motion } from "framer-motion"; // 👈 Framer Motion import

const Education = () => {
  const educationData = [
    {
      institution: "JSS Academy of Technical Education",
      degree: "Bachelor of Technology in Computer Science",
      year: "2021-2025",
      grade: "Grade: 7.9",
    },
    {
      institution: "DAV Public School, CBSE",
      degree: "Class 12",
      year: "2019-2020",
      grade: "Grade: 93.6%",
    },
    {
      institution: "DAV Public School, CBSE",
      degree: "Class 10",
      year: "2017-2018",
      grade: "Grade: 91.3%",
    },
  ];

  return (
    <div className="Education py-30">
      <div className="text-center">
        <h1 className="text-5xl text-white">Education</h1>
      </div>

      <div className="py-15 flex flex-col gap-10 items-center">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }} // 👈 Start position (hidden + below)
            whileInView={{ opacity: 1, y: 0 }} // 👈 Animate when in viewport
            transition={{ duration: 0.6, delay: index * 0.2 }} // 👈 Staggered effect
            viewport={{ once: true }}
            className="border border-gray-700 rounded-xl w-[100%] px-20 py-10 text-white shadow-lg"
          >
            <h2 className="text-3xl font-semibold text-left text-blue-400">
              {edu.institution}
            </h2>
            <p className="text-left text-gray-300">{edu.degree}</p>
            <p className="text-left text-gray-400">{edu.year}</p>
            <p className="text-left text-gray-400 font-semibold">{edu.grade}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
