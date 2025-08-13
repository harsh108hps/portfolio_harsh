// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero-bg.png";
import profilePic from "../assets/profile.jpg";

const Home = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
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
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content Wrapper */}
      <motion.div
        className="relative z-10 mx-auto w-full max-w-6xl flex flex-col-reverse md:flex-row items-center md:items-center justify-between gap-10 md:gap-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Side: Text */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Hi! I’m{" "}
            <span className="bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent">
              Harsh Pratap Singh
            </span>{" "}
            👋
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-xl leading-relaxed mx-auto md:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Aspiring{" "}
            <span className="text-cyan-400 font-medium">MERN Stack Developer</span>{" "}
            passionate about building fast, scalable, and beautiful full-stack web
            applications.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center md:items-start gap-4 sm:gap-6 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <button
              onClick={() => scrollToSection("about")}
              className="bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 text-white font-semibold py-3 px-6 sm:px-7 rounded-full shadow-md text-sm sm:text-base"
            >
              More About Me 📘
            </button>

            <button
              onClick={() => scrollToSection("projects")}
              className="bg-pink-600 hover:bg-pink-700 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 text-white font-semibold py-3 px-6 sm:px-7 rounded-full shadow-md text-sm sm:text-base"
            >
              View My Work 🚀
            </button>

            <a
              href="https://drive.google.com/uc?export=download&id=1vNqR_SN1sKis8xRj3WDt9DJJKi1Qd38l"
              className="bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 text-black font-semibold py-3 px-6 sm:px-7 rounded-full shadow-md text-sm sm:text-base hover:scale-105 transition-transform duration-300"
            >
              📄 Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right Side: Profile Picture */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <img
            src={profilePic}
            alt="Profile"
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full border-4 border-white shadow-2xl object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
