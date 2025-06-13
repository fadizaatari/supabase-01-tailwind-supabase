import { FaBars } from "react-icons/fa6";
import { FaSun, FaMoon, FaDatabase, FaRegNewspaper } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { IoMdLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

import logo from "../assets/logo.png";
import React, { createContext, useContext, useState, useEffect } from "react";

import { Separator } from "@/components/ui/separator";
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

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme || "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeContent = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div onClick={toggleTheme}>
      <div
        className="flex rounded-full flex-col align-middle justify-center
       items-center p-2 cursor-pointer h-full w-full text-2xl focus:outline-none
       dark:bg-white dark:text-black bg-black text-white
       hover:bg-MyGray hover:text-white"
      >
        {theme === "light" ? <FaMoon size={10} /> : <FaSun size={10} />}
      </div>
    </div>
  );
};

const Header = ({ showMenu = true }) => {
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
    <div
      className="dark:bg-black bg-white fixed
    border-gray-800 border-b-1 text-white w-full text-xs h-10 m-0 py-1 px-6 flex items-center justify-between"
    >
      {/* Left side */}
      <Link to="/">
        <img src={logo} alt="My Company Logo" className="w-5 h-5" />
      </Link>
      {/* Middle side */}
      <p className="sm:text-sm md:text-2xl lg:text-3xl dark:bg-black dark:text-white bg-white text-black font-orbitron">
        Electricity Generator Consumption Billing
      </p>
      {/* Right side - Dropdown */}

      <div className={`grid ${showMenu ? "grid-cols-2 gap-3" : "grid-cols-1"}`}>
        <ThemeProvider>
          <ThemeContent />
        </ThemeProvider>

        {showMenu && (
          <div className="relative">
            <button
              className="cursor-pointer rounded-full p-2
            focus:outline-none flex flex-col align-middle justify-center
            items-center  h-full w-full text-1xl 
           bg-black text-white dark:text-black dark:bg-white
           hover:bg-MyGray hover:text-white"
              onClick={toggleDropdown}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {isHovered ? <FaBars /> : <FaBars />}
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-38 bg-gray-800 rounded shadow-lg z-10">
                <Link
                  hidden
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
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
