import React from "react";

const Skills = () => {
  const technicalSkills = [
    "HTML5", "CSS3", "JavaScript", "TypeScript",
    "React", "Redux", "Node.js", "Express",
    "MongoDB", "Firebase", "Git & GitHub",
    "Tailwind CSS", "Postman", "REST APIs"
  ];

  const softSkills = [
    "Problem Solving", "Communication", "Team Collaboration",
    "Adaptability", "Time Management", "Creativity"
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
            className="bg-gradient-to-r from-indigo-800 to-purple-800 rounded-xl p-5 shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out text-center text-lg font-semibold text-white hover:text-yellow-300 border border-indigo-700 hover:border-yellow-400"
          >
            {skill}
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
            className="bg-gradient-to-r from-indigo-800 to-purple-800 rounded-xl p-5 shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out text-center text-lg font-semibold text-white hover:text-yellow-300 border border-indigo-700 hover:border-yellow-400"
          >
            {skill}
          </div>
        ))}
      </div>

    </section>
  );
};

export default Skills;
