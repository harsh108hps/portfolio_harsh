import React from "react";

const Projects = () => {
  const myProjects = [
    {
      title: "MEMEGRAM",
      description:
        "A full-stack meme-sharing platform with meme creation, AI captions, and social features.",
      link: "https://memegram-neon.vercel.app/",
      github: "https://github.com/harsh108hps/MEMEGRAM",
      image: "src/assets/Home.png",
      featured: true,
    },
    {
      title: "FinTech - Personal Finance Tracker",
      description:
        "Track your income, expenses, goals, and financial health with visual analytics.",
      link: "https://personal-finance-tracker-15o8.vercel.app/",
      github: "https://github.com/harsh108hps/personal-finance-tracker",
      image: "src/assets/personalfinance.png",
    },
    {
      title: "Landlord-Tenant Communication App",
      description:
        "A real-time platform for rent tracking, issue management, messaging, and dashboards.",
      link: "https://landlord-tenant-app-seven.vercel.app/",
      github: "https://github.com/harsh108hps/landlord-tenant-app",
      image: "src/assets/rentease.png",
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Page Heading */}
        <h2 className="text-5xl sm:text-6xl font-extrabold tracking-wide text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-cyan-400 drop-shadow-lg">
          Projects
        </h2>

        {/* Featured Project */}
        {myProjects
          .filter((project) => project.featured)
          .map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-indigo-800 to-purple-800 rounded-2xl p-6 mb-16 flex flex-col md:flex-row items-center gap-6 shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:w-1/2 rounded-xl shadow-md"
              />
              <div className="flex-1 text-center md:text-left space-y-4">
                <h3 className="text-3xl font-bold text-white">{project.title} 🚀</h3>
                <p className="text-gray-200">{project.description}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-400 text-gray-900 py-2 px-4 rounded-lg font-semibold hover:bg-yellow-300 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-yellow-400 py-2 px-4 rounded-lg font-semibold text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {myProjects
            .filter((project) => !project.featured)
            .map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-indigo-800 to-purple-800 rounded-xl p-6 shadow-md hover:shadow-xl transition border border-indigo-700"
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-md mb-4 w-full h-40 object-cover"
                  />
                )}
                <h3 className="text-xl font-bold text-yellow-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-200 mb-4">{project.description}</p>
                <div className="flex flex-col gap-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-400 text-gray-900 py-2 px-4 rounded text-sm hover:bg-yellow-300 text-center"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-300 text-sm hover:underline text-center"
                  >
                    View Code on GitHub
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
