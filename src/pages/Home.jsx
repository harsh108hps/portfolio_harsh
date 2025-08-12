// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero-bg.png"; // replace with your image

const Home = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center text-white px-4 sm:px-6 md:px-8"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-3xl text-center px-2 sm:px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Title */}
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 sm:mb-6"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent">
            Harsh Pratap Singh
          </span>{" "}
          👋
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 sm:mb-10 leading-relaxed px-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Aspiring{" "}
          <span className="text-cyan-400 font-medium">
            MERN Stack Developer
          </span>{" "}
          passionate about building fast, scalable, and beautiful full-stack web
          applications.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <button
            onClick={() => scrollToSection("about")}
            className="bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-full shadow-md text-sm sm:text-base"
          >
            More About Me 📘
          </button>

          <button
            onClick={() => scrollToSection("projects")}
            className="bg-pink-600 hover:bg-pink-700 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-full shadow-md text-sm sm:text-base"
          >
            View My Work 🚀
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
