import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { session, signOut } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async (e) => {
    e.preventDefault();

    try {
      await signOut();
      navigate("/");
    } catch (err) {
      setError("An unexpected error occurred."); // Catch unexpected errors
    }
  };
  console.log(session);
  return (
    <div className="bg-white text-black w-full h-50">
      <h1 className="bg-white text-black">Dashboard</h1>
      <h2 className="bg-white text-black">Welcome, {session?.user?.email}</h2>
      <div>
        <p
          onClick={handleSignOut}
          className="hover:cursor-pointer  border inline-block px-4 py-3 mt-4 bg-white text-black"
        >
          Sign out
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
