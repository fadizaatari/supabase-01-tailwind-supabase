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
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

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
    <div className="bg-black fixed border-gray-800 border-b-1 text-white w-full text-xs h-10 m-0 py-1 px-6 flex items-center justify-between ">
      {/* Left side */}
      <img src={logo} alt="My Company Logo" className="w-5 h-5" />
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
              <div className="flex items-center ">
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

            <Separator className="mt-1 mb-1" />

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
    </div>
  );
};

export default Header;
