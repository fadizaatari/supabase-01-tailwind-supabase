import { Separator } from "@/components/ui/separator";
import { FaBars } from "react-icons/fa6";
import { FaSun, FaMoon } from "react-icons/fa";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black border-gray-800 border-b-1 text-white fixed w-full text-xs h-10 m-0 py-1 px-6 flex items-center justify-between">
      {/* Left side */}
      <p className="text-1xl">Welcome to Supabase Trial</p>
      {/* Right side - Dropdown */}
      <div className="relative">
        <button
          className="cursor-pointer bg-gray-800 text-white rounded-full p-2 hover:bg-white hover:text-gray-800 focus:outline-none"
          onClick={toggleDropdown}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? <FaBars /> : <FaBars />}
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-28 bg-gray-800 rounded shadow-lg z-10">
            <Link
              to="/profile"
              className="block rounded py-2 px-4 text-white hover:bg-white hover:text-gray-800"
            >
              Profile
            </Link>
            <Link
              to="/read"
              className="block rounded py-2 px-4 text-white hover:bg-white hover:text-gray-800"
            >
              My Data
            </Link>

            <Separator className="mt-1 mb-1" />
            <Link className="block rounded py-2 px-4 text-white hover:bg-white hover:text-gray-800">
              Logout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
