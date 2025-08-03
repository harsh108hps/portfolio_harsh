import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center">
      
      {/* Logo */}
      <h1 className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
        MyPortfolio
      </h1>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6 text-gray-700 text-sm sm:text-base font-medium">
        <NavLink to="/" label="Home" />
        <NavLink to="/about" label="About" />
        <NavLink to="/skills" label="Skills" />
        <NavLink to="/projects" label="Projects" />
        <NavLink to="/resume" label="Resume" />
        <NavLink to="/contact" label="Contact" />
      </div>

      {/* Hamburger Icon (Mobile Only) */}
      <div className="md:hidden text-2xl text-gray-700 cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white/90 backdrop-blur-md flex flex-col items-center space-y-6 py-6 shadow-md md:hidden transition">
          <NavLink to="/" label="Home" onClick={() => setMenuOpen(false)} />
          <NavLink to="/about" label="About" onClick={() => setMenuOpen(false)} />
          <NavLink to="/skills" label="Skills" onClick={() => setMenuOpen(false)} />
          <NavLink to="/projects" label="Projects" onClick={() => setMenuOpen(false)} />
          <NavLink to="/resume" label="Resume" onClick={() => setMenuOpen(false)} />
          <NavLink to="/contact" label="Contact" onClick={() => setMenuOpen(false)} />
        </div>
      )}
    </nav>
  );
};

// Reusable NavLink Component with hover underline
const NavLink = ({ to, label, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="relative hover:text-blue-500 transition text-lg"
  >
    {label}
    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 ease-in-out hover:w-full"></span>
  </Link>
);

export default Navbar;
