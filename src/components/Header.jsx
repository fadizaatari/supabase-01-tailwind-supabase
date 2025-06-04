import React, { createContext, useContext, useState, useEffect } from "react";
import { FaRegNewspaper } from "react-icons/fa";
import { FcElectricity } from "react-icons/fc";
import logo from "../assets/logo.png";
import { IoMdLogOut } from "react-icons/io";
import { AiFillDashboard } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Separator } from "@/components/ui/separator";
import { FaBars } from "react-icons/fa6";
import { FaSun, FaMoon } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";

import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const ThemeContext = createContext(null);

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
// 3. Theme Provider Component
// This component wraps your application and provides the theme context to its children.
const ThemeProvider = ({ children }) => {
  // Initialize theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme || "light";
  });

  // Effect to update the 'theme' class on the body element
  // and store the theme in localStorage whenever it changes.
  useEffect(() => {
    const root = document.documentElement; // Get the root HTML element
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemedIcon = () => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col align-middle justify-center items-center p-2 cursor-pointer w-full text-2xl">
      {/* Conditionally render the icon based on the theme */}
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </div>
  );
};

const Header = () => {
  const { session, signOut } = UserAuth();
  const handleSignOut = async (e) => {
    try {
      await signOut();
    } catch (err) {
      setError("An unexpected error occurred."); // Catch unexpected errors
    }
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black fixed border-gray-800 border-b-1 text-white w-full text-xs h-10 m-0 py-1 px-6 flex items-center justify-between">
      {/* Left side */}
      <Link to="/">
        <img src={logo} alt="My Company Logo" className="w-5 h-5" />
      </Link>
      {/* Middle side */}
      <p className="sm:text-sm md:text-2xl lg:text-3xl font-orbitron">
        Electricity Generator Consumption Billing
      </p>
      {/* Right side - Dropdown */}
      <div className="relative">
        <button
          className="cursor-pointer bg-gray-800 text-white rounded-full p-2 hover:bg-white hover:text-gray-800 focus:outline-none position-"
          onClick={toggleDropdown}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? <FaBars /> : <FaBars />}
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-38 bg-gray-800 rounded shadow-lg z-10">
            <Link
              to="/dashboard"
              className="block rounded py-2 px-4 text-white hover:bg-white hover:text-gray-800"
            >
              <div className="flex items-center ">
                <AiFillDashboard />
                <p className="pl-2">Dashboard</p>
              </div>
            </Link>
            <Link
              to="/profile"
              className="block rounded py-2 px-4 text-white hover:bg-white hover:text-gray-800"
            >
              <div className="flex items-center ">
                <CgProfile />
                <p className="pl-2">Profile</p>
              </div>
            </Link>

            <Link
              to="/subscriptions"
              className="block rounded py-2 px-4 text-white hover:bg-white hover:text-gray-800"
            >
              <div className="flex items-center">
                <FaDatabase />
                <p className="pl-2">My Subscriptions</p>
              </div>
            </Link>
            <Link
              to="/news"
              className="block rounded py-2 px-4 text-white hover:bg-white hover:text-gray-800"
            >
              <div className="flex items-center ">
                <FaRegNewspaper />
                <p className="pl-2">News</p>
              </div>
            </Link>

            <Separator className="mt-1 mb-1 bg-white dark:bg-gray-500" />

            <button
              className="block rounded py-2 px-4 w-full text-white hover:bg-white hover:text-gray-800 text-left cursor-pointer"
              onClick={handleSignOut}
            >
              <div className="flex items-center ">
                <IoMdLogOut />

                <p className="pl-2">Logout</p>
              </div>
            </button>
            <Separator className="mt-1 mb-1 bg-white dark:bg-gray-500" />
            <div className="bg-gray-800 flex flex-col">
              <ThemeProvider>
                <ThemeContent />
              </ThemeProvider>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

// Separate component to consume theme context within ThemeProvider
const ThemeContent = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div onClick={toggleTheme}>
      <ThemedIcon />
    </div>
  );
};
