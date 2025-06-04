import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { MyButtonGreen, MyButtonAlertDialog } from "../components/MyComponents";
import Header from "../components/Header";

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
  return (
    <div>
      <div>
        <Header />
        <div className=" top-0 left-0 h-screen w-screen flex justify-center items-center p-10 bg-black text-white rounded-md text-lg">
          <div className="dark:bg-gray-800  bg-yellow-800 p-6 rounded-md shadow-md text-white">
            <h2> {session?.user?.email}</h2>
            <h2> {session.user.id}</h2>

            <div>
              <MyButtonAlertDialog
                onClickDialog={handleSignOut}
                buttonCaption="Sign Out"
                alertDialogDescription="Choosing Yes will disconnect you from the current session"
                alertDialogTitle="Are you sure you want to Sign Out?"
                alertCancelText="No"
                alertDialogText="Yes"
              />
              <MyButtonGreen
                onClick={handleSignOut}
                caption="Sign Out"
                toolTip="Press here to Sign Out"
              ></MyButtonGreen>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
