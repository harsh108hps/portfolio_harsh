import React from "react";
import profilePic from "../assets/profile.jpg"; // Import your profile picture

const About = () => {
  const techStack = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS"];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center px-4 py-16">
      <div className="max-w-3xl w-full text-center space-y-10">

        {/* Profile Picture */}
        <div className="flex justify-center">
          <div className="w-40 h-40 rounded-full border-4 border-gradient-to-r from-pink-500 to-cyan-400 overflow-hidden shadow-lg">
            <img src={profilePic} alt="Harsh Pratap Singh" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* About Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
          About Me
        </h2>

        {/* Professional Summary */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Professional Summary</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            Driven <span className="text-yellow-300 font-medium">MERN Stack Developer</span> skilled in building responsive,
            scalable web applications using <span className="text-pink-400">React</span>, <span className="text-green-400">Node.js</span>, 
            <span className="text-blue-400"> Express</span>, and <span className="text-emerald-400">MongoDB</span>. Experienced in 
            RESTful APIs, authentication, and modern UI frameworks. Strong communicator, detail-oriented team player, and passionate 
            about solving real-world problems with clean, efficient code.
          </p>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Education</h3>
          <div className="text-left text-gray-300 space-y-4">
            <div>
              <p className="font-semibold text-white">Lucknow Public School</p>
              <p className="text-sm">Intermediate — <span className="text-gray-400">May 2018</span></p>
            </div>
            <div>
              <p className="font-semibold text-white">Babu Banarasi Das Institute of Technology and Management</p>
              <p className="text-sm">Bachelor of Technology in Computer Science — <span className="text-gray-400">Aug 2023</span></p>
            </div>
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-cyan-600 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
