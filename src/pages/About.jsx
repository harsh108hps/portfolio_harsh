import React from "react";
import hackathonCert from "../assets/hackathon.jpeg";
import { motion } from "framer-motion";

const About = () => {
  const techStack = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-indigo-950 via-gray-900 to-purple-950 text-white flex items-center justify-center px-4 py-16"
    >
      <motion.div
        className="max-w-3xl w-full text-center space-y-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
    

        {/* About Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
          About Me
        </h2>

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
            Professional Summary
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            Driven{" "}
            <span className="text-yellow-300 font-medium">
              MERN Stack Developer
            </span>{" "}
            skilled in building responsive, scalable web applications using{" "}
            <span className="text-cyan-400">React</span>,{" "}
            <span className="text-green-400">Node.js</span>,{" "}
            <span className="text-blue-400">Express</span>, and{" "}
            <span className="text-emerald-400">MongoDB</span>. Experienced in
            RESTful APIs, authentication, and modern UI frameworks. Strong
            communicator, detail-oriented team player, and passionate about
            solving real-world problems with clean, efficient code.
          </p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
            Education
          </h3>
          <div className="text-left text-gray-300 space-y-4">
            <div>
              <p className="font-semibold text-white">Masai School</p>
              <p className="text-sm">
                Software Development —{" "}
                <span className="text-gray-400">Jan 2025 – Present</span>
              </p>
            </div>
            <div>
              <p className="font-semibold text-white">
                Babu Banarasi Das Institute of Technology and Management
              </p>
              <p className="text-sm">
                Bachelor of Technology in Computer Science —{" "}
                <span className="text-gray-400">Aug 2023</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
            Certifications
          </h3>
          <div className="flex flex-col items-center space-y-4">
            <img
              src={hackathonCert}
              alt="Masai Hackathon Certificate"
              className="rounded-lg shadow-lg border-4 border-gray-700 max-w-xs"
            />
            <p className="text-gray-300 text-sm">
              Masai Hackathon Certificate —{" "}
              <span className="text-yellow-300">2025</span>
            </p>
          </div>
        </motion.div>

        {/* Tech Stack Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white transition-all duration-300 shadow-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
