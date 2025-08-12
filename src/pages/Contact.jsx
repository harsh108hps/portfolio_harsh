// src/pages/Contact.jsx
import { FaPhoneAlt, FaEnvelope, FaUser, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-24 px-6 flex flex-col items-center">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-14
        text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-lg">
        Contact Me
      </h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full">
        {/* Contact Info Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-10 space-y-8 border border-white/20
          flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaUser className="text-cyan-400 text-2xl" />
              <span className="text-lg font-medium">Harsh Pratap Singh</span>
            </div>

            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-green-400 text-2xl" />
              <span className="text-lg font-medium">+91 8318795741</span>
            </div>

            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-yellow-400 text-2xl" />
              <span className="text-lg font-medium break-all">harshpratapsingh39900@gmail.com</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-8 pt-6 border-t border-gray-700">
            <a
              href="https://www.linkedin.com/in/profileharsh109/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 transition text-3xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/harsh108hps"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition text-3xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>

          {/* View Resume Button */}
          <a
            href="https://drive.google.com/file/d/1vNqR_SN1sKis8xRj3WDt9DJJKi1Qd38l/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block w-full text-center px-6 py-3 rounded-lg font-semibold 
              bg-gradient-to-r from-cyan-500 to-purple-500 hover:scale-105 transition-transform shadow-lg"
          >
            View Resume
          </a>
        </div>

        {/* Contact Form Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-10 border border-white/20">
          <h3 className="text-2xl font-bold mb-6 text-center
            text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
            Send Me a Message
          </h3>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-5 py-3 rounded-lg bg-white/10 border border-gray-600 
                focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 outline-none transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-5 py-3 rounded-lg bg-white/10 border border-gray-600 
                focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 outline-none transition"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-5 py-3 rounded-lg bg-white/10 border border-gray-600 
                focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 outline-none transition resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg font-semibold 
                bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105 transition-transform shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
