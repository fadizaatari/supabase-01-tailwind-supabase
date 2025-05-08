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
    <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center p-10 bg-black text-white rounded-md text-lg">
      <div className="bg-gray-800 p-6 rounded-md shadow-md text-white">
        <h1 className="pt-1 pb-5 text-2xl">Welcome to Supabase Dashboard</h1>
        <h2> {session?.user?.email}</h2>
        <h1 className="pt-5 pb-2 text-2xl text-orange-600">
          More Features to come soon
        </h1>
        <div>
          <button
            onClick={handleSignOut}
            className="w-full mt-4 bg-green-600 text-white rounded-md h-13 hover:bg-green-800"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
