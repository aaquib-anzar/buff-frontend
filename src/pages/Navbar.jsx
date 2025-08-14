// components/Navbar.tsx
import React, { useState } from "react";
import { Link as ScrollLink} from "react-scroll";
import {Link as RouterLink} from "react-router-dom"
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const navItems = ["HOME", "ABOUT", "SERVICES", "TEAM", "TESTIMONIALS"];

  return (
    <nav className="font-delius fixed w-full z-50 bg-white dark:bg-black shadow-md mx-2 rounded-lg">
      <div className="px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="font-pacifico pl-4 text-3xl sm:text-4xl text-black dark:text-white">
          <RouterLink to ="/">Buff & Beyond </RouterLink>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex justify-center gap-12">
          {navItems.map((item) => (
            <ScrollLink
              key={item}
              to={item.toLowerCase()}
              smooth={"easeInOutQuart"}
              duration={1500}
              offset={-70}
              className="p-2 text-xl font-bold text-black dark:text-white hover:scale-110 transition-all cursor-pointer"
            >
              {item}
            </ScrollLink>
          ))}
        </div>

        {/* Desktop Right Icons */}
        <div className="hidden md:flex items-center gap-6 mx-6 mr-10 font-bold">
          <button
            onClick={toggleDarkMode}
            className="w-10 h-10 flex items-center justify-center dark:bg-black text-black dark:text-white hover:bg-gray-400 rounded-full transition-all cursor-pointer"
          >
            {darkMode ? <Moon /> : <Sun />}
          </button>
          <RouterLink
            to="bookslot"
            smooth={true}
            duration={500}
            className="relative group text-xl text-black dark:text-white cursor-pointer"
          >
            <span className="relative z-10">BOOK SLOT</span>
            <span className="absolute left-0 -bottom-1 h-1 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </RouterLink>
        </div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden pr-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-black dark:text-white"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 py-3 space-y-4 bg-white dark:bg-black">
          {navItems.map((item) => (
            <ScrollLink
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className="block text-xl text-black dark:text-white hover:text-blue-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </ScrollLink>
          ))}
          <button
            onClick={toggleDarkMode}
            className="w-10 h-10 flex items-center justify-center dark:bg-black text-black dark:text-white hover:bg-gray-400 rounded-full transition-all"
          >
            {darkMode ? <Moon /> : <Sun />}
          </button>

          {/* Book Slot Link */}
          <RouterLink
            to="bookslot"
            smooth={true}
            duration={500}
            className="block text-xl text-black dark:text-white hover:text-blue-500 transition-all"
            onClick={() => setIsOpen(false)}
          >
            Book Slot
          </RouterLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
