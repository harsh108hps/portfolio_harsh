import React from "react";

const Resume = () => {
  return (
    <section className="min-h-screen pt-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col items-center px-4">
      
      {/* Page Heading */}
      <h1 className="text-5xl sm:text-6xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400">
        Resume
      </h1>

      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-10 flex flex-col items-center text-center space-y-6 max-w-lg">
        
        {/* Gradient Sub-heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400">
          My Resume
        </h2>

        <p className="text-gray-300">
          Click the button below to download my resume directly.
        </p>

      <a
  href="https://drive.google.com/uc?export=download&id=1QyrX_-S4X6_Sjdh_7YtwFhh2YiVF4snl"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 text-black font-semibold py-3 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 text-center"
>
  📄 Download Resume
</a>

      </div>
    </section>
  );
};

export default Resume;
