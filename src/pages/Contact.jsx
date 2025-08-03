// src/pages/Contact.jsx
import { FaPhoneAlt, FaEnvelope, FaUser, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-24 px-6 flex flex-col items-center">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-10 text-center">
        Contact Me
      </h2>

      <div className="bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-xl space-y-6">
        <div className="flex items-center space-x-4">
          <FaUser className="text-cyan-400 text-xl" />
          <span className="text-lg">Harsh Pratap Singh</span>
        </div>

        <div className="flex items-center space-x-4">
          <FaPhoneAlt className="text-green-400 text-xl" />
          <span className="text-lg">+91 8318795741</span>
        </div>

        <div className="flex items-center space-x-4">
          <FaEnvelope className="text-yellow-400 text-xl" />
          <span className="text-lg">harshpratapsingh39900@gmail.com</span>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 pt-6 border-t border-gray-700">
          <a
            href="https://www.linkedin.com/in/profileharsh109/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition text-2xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/harsh108hps"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition text-2xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
