import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gradient-to-r from-indigo-950/80 via-purple-950/80 to-pink-900/80 backdrop-blur-md shadow-lg fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center border-b border-white/10"
    >
      {/* Logo */}
      <motion.h1
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent cursor-pointer"
      >
        Harsh
      </motion.h1>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6 text-white text-sm sm:text-base font-medium">
        <NavLink to="home" label="Home" />
        <NavLink to="about" label="About" />
        <NavLink to="skills" label="Skills" />
        <NavLink to="projects" label="Projects" />
        <NavLink to="resume" label="Resume" />
        <NavLink to="contact" label="Contact" />
      </div>

      {/* Hamburger Icon */}
      <motion.div
        whileTap={{ scale: 0.9 }}
        className="md:hidden text-2xl text-white cursor-pointer"
        onClick={toggleMenu}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-900 backdrop-blur-md flex flex-col items-center space-y-6 py-6 shadow-lg md:hidden border-t border-white/10"
          >
            <NavLink to="home" label="Home" onClick={() => setMenuOpen(false)} />
            <NavLink to="about" label="About" onClick={() => setMenuOpen(false)} />
            <NavLink to="skills" label="Skills" onClick={() => setMenuOpen(false)} />
            <NavLink to="projects" label="Projects" onClick={() => setMenuOpen(false)} />
            <NavLink to="resume" label="Resume" onClick={() => setMenuOpen(false)} />
            <NavLink to="contact" label="Contact" onClick={() => setMenuOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// NavLink with animations & gradient hover underline
const NavLink = ({ to, label, onClick }) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <ScrollLink
      to={to}
      smooth={true}
      duration={500}
      spy={true}
      offset={-70}
      onClick={onClick}
      className="relative text-lg cursor-pointer transition duration-300 
                 bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent 
                 hover:from-yellow-300 hover:via-pink-300 hover:to-purple-300"
    >
      {label}
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-300 transition-all duration-300 ease-in-out hover:w-full"></span>
    </ScrollLink>
  </motion.div>
);

export default Navbar;
