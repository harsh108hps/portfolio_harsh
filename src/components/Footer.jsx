const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-center py-6 mt-20 text-gray-400 border-t border-gray-700">
      <p className="text-sm">
        © {new Date().getFullYear()} 
        <span className="text-white font-semibold hover:text-cyan-400 transition duration-300 cursor-pointer ml-1">
          Harsh Pratap Singh
        </span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
