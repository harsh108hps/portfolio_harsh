import React from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt,
  FaGithub, FaDatabase, FaNpm, FaRegClock, FaUsers,
  FaComments, FaLightbulb, FaTasks
} from "react-icons/fa";
import { SiTypescript, SiRedux, SiExpress, SiMongodb, SiFirebase, SiPostman, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const technicalSkills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-4xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400 text-4xl" /> },
    { name: "React", icon: <FaReact className="text-cyan-400 text-4xl" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500 text-4xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
    { name: "Express", icon: <SiExpress className="text-gray-300 text-4xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-4xl" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-4xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500 text-4xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-white text-4xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-4xl" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-400 text-4xl" /> },
    { name: "REST APIs", icon: <FaDatabase className="text-pink-400 text-4xl" /> },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: <FaLightbulb className="text-yellow-300 text-4xl" /> },
    { name: "Communication", icon: <FaComments className="text-blue-400 text-4xl" /> },
    { name: "Team Collaboration", icon: <FaUsers className="text-green-400 text-4xl" /> },
    { name: "Adaptability", icon: <FaTasks className="text-purple-400 text-4xl" /> },
    { name: "Time Management", icon: <FaRegClock className="text-pink-400 text-4xl" /> },
    { name: "Creativity", icon: <FaLightbulb className="text-yellow-400 text-4xl" /> }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-950 via-gray-900 to-purple-950 text-white px-6 py-24 flex flex-col items-center">
      
      {/* Technical Skills Heading */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-12 text-center">
        Skills & Technologies
      </h2>

      {/* Technical Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full max-w-5xl mb-20">
        {technicalSkills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gradient-to-r from-indigo-800 to-purple-800 rounded-xl p-5 shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out text-center font-semibold text-white hover:text-yellow-300 border border-indigo-700 hover:border-yellow-400"
          >
            {skill.icon}
            <span className="mt-3 text-lg">{skill.name}</span>
          </div>
        ))}
      </div>

      {/* Soft Skills Heading */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-12 text-center">
        Soft Skills
      </h2>

      {/* Soft Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full max-w-5xl">
        {softSkills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gradient-to-r from-indigo-800 to-purple-800 rounded-xl p-5 shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out text-center font-semibold text-white hover:text-yellow-300 border border-indigo-700 hover:border-yellow-400"
          >
            {skill.icon}
            <span className="mt-3 text-lg">{skill.name}</span>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Skills;
