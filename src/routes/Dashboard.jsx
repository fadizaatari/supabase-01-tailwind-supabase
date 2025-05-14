import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { MyButtonGreen, MyButtonAlertDialog } from "../components/MyComponents";

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
  const [date, setDate] = useState(new Date());
  return (
    <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center p-10 bg-black text-white rounded-md text-lg">
      <div className="bg-gray-800 p-6 rounded-md shadow-md text-white">
        <h1 className="pt-1 pb-5 text-2xl">Welcome to Supabase Dashboard</h1>
        <h2> {session?.user?.email}</h2>

        <div>
          <MyButtonAlertDialog
            onClickOK={handleSignOut}
            onClickCancel={() => alert("Account Deleted")}
            caption="Alert Dialog"
          />
          <MyButtonGreen
            onClick={handleSignOut}
            caption="Sign Out"
            toolTip="Press here to Sign Out"
          ></MyButtonGreen>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
