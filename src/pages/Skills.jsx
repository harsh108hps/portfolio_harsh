import React from "react";

const Skills = () => {
  const skills = [
    "HTML5", "CSS3", "JavaScript", "TypeScript",
    "React", "Redux", "Node.js", "Express",
    "MongoDB", "Firebase", "Git & GitHub",
    "Tailwind CSS", "Postman", "REST APIs"
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6 py-24 flex flex-col items-center">
      
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-cyan-400 mb-12 text-center">
        Skills & Technologies
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full max-w-5xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300 ease-in-out text-center text-lg font-semibold text-white hover:text-cyan-400 border border-gray-700 hover:border-cyan-400"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
