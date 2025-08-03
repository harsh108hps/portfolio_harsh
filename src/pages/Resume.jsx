import React from "react";

const Resume = () => {
  return (
    <section className="min-h-screen pt-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center px-4">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-10 flex flex-col items-center text-center space-y-6 max-w-lg">
        
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
          My Resume
        </h2>

        <p className="text-gray-300">
          You can view or download my resume below to learn more about my skills, experience, and projects.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <a
            href="/resumefinale.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-lg shadow-md text-center"
          >
            📄 View Resume
          </a>
          <a
            href="/resumefinale.pdf"
            download
            className="flex-1 border border-blue-400 hover:bg-blue-600 hover:text-white transition text-blue-400 font-semibold py-3 rounded-lg shadow-md text-center"
          >
            ⬇️ Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
