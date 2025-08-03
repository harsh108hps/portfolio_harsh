import React from "react";

const Projects = () => {
  const myProjects = [
    {
      title: "MEMEGRAM",
      description: "A full-stack meme-sharing platform with meme creation, AI captions, and social features.",
      link: "https://memegram-neon.vercel.app/",
      github: "https://github.com/harsh108hps/MEMEGRAM",
      image: "src/assets/Home.png",
      featured: true,
    },
    {
      title: "FinTech - Personal Finance Tracker",
      description: "Track your income, expenses, goals, and financial health with visual analytics.",
      link: "https://github.com/harsh108hps/personal-finance-tracker/blob/main/frontend/personal-finance-frontend/VERCEL",
      github: "https://github.com/harsh108hps/personal-finance-tracker",
     
    },
    {
      title: "Landlord-Tenant Communication App",
      description: "A real-time platform for rent tracking, issue management, messaging, and dashboards.",
      link: "https://landlord-tenant-app-seven.vercel.app/",
      github: "https://github.com/harsh108hps/landlord-tenant-app",
       image: "src/assets/rentease.png",
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-4 bg-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Projects</h2>

        {/* Featured Project */}
        {myProjects
          .filter((project) => project.featured)
          .map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-pink-600 to-purple-700 rounded-2xl p-6 mb-16 flex flex-col md:flex-row items-center gap-6 shadow-lg"
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
                    className="bg-white text-gray-900 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent border border-white py-2 px-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition"
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
                className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition border border-gray-700"
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-md mb-4 w-full h-40 object-cover"
                  />
                )}
                <h3 className="text-xl font-semibold text-blue-400 mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-col gap-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white py-2 px-4 rounded text-sm hover:bg-blue-700 text-center"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 text-sm hover:underline text-center"
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
