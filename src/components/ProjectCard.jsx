// src/components/ProjectCard.jsx
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ title, description, github, live }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 flex-1">{description}</p>
      <div className="mt-4 flex space-x-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-black flex items-center gap-2"
        >
          <FaGithub /> Code
        </a>
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
        >
          <FaExternalLinkAlt /> Live
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
