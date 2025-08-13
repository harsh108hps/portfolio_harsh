import { FaPhoneAlt, FaEnvelope, FaUser, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-24 px-6 flex flex-col items-center">
      <h2
        className="text-4xl sm:text-5xl font-extrabold text-center mb-14
        text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-lg"
      >
        Contact Me
      </h2>

      <div className="max-w-3xl w-full">
        <div
          className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-10 space-y-8 border border-white/20
          flex flex-col justify-between"
        >
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
              <a
                href="https://mail.google.com/mail/?view=cm&to=harshpratapsingh39900@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium break-all hover:underline"
              >
                harshpratapsingh39900@gmail.com
              </a>
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
  href="https://drive.google.com/uc?export=download&id=1QyrX_-S4X6_Sjdh_7YtwFhh2YiVF4snl"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 text-black font-semibold py-3 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 text-center"
>
  📄 View Resume
</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
