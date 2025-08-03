// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white px-4">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
          Hi, I'm <span className="text-pink-500">Harsh Pratap Singh</span> 👋
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 mb-10">
          Aspiring <span className="text-cyan-400 font-medium">MERN Stack Developer</span> passionate about building fast, scalable, and beautiful full-stack web applications.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            to="/about"
            className="bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-semibold py-3 px-6 rounded-full shadow-md"
          >
            More About Me 📘
          </Link>

          <Link
            to="/projects"
            className="bg-pink-600 hover:bg-pink-700 transition duration-300 text-white font-semibold py-3 px-6 rounded-full shadow-md"
          >
            View My Work 🚀
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
