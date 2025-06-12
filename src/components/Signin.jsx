import Header from "./Header";
import {
  ComponentBread,
  ComponentDivLevel1,
  ComponentDivLevel2,
  ComponentDivLevel3,
  ComponentDivLevel4,
  ComponentLogoLeft,
} from "./MyComponents.jsx";

import { Toaster, toast } from "sonner";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { signInUser } = UserAuth();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const { session, error } = await signInUser(email, password); // Use your signIn function

    if (error) {
      setError(error); // Set the error message if sign-in fails
      {
        toast.error(error, {
          duration: 2000,
        });
      }

      // Set a timeout to clear the error message after a specific duration (e.g., 3 seconds)
      setTimeout(() => {
        setError("");
      }, 3000); // 3000 milliseconds = 3 seconds
    } else {
      // Redirect or perform any necessary actions after successful sign-in
      console.log("Session:", session);
      navigate("/dashboard");
    }

    if (session) {
      closeModal();
      setError(""); // Reset the error when there's a session
    }
  };

  return (
    <ComponentDivLevel1>
      <Header showMenu={false} />
      <ComponentBread showBorder={false} showHome={false} />
      <ComponentDivLevel2>
        <ComponentDivLevel3>
          <ComponentDivLevel4>
            <div className="p-1 grid landscape:grid-cols-2 w-full h-full">
              <div className=" bg-gray-700 p-2 flex">
                <ComponentLogoLeft />
              </div>
              <div className="h-full grid grid-cols-1 items-center justify-between align-middle p-1">
                <form onSubmit={handleSignIn}>
                  <div className="p-4 w-full flex flex-col">
                    <p className="font-bold text-base text-white pb-2">
                      Sign In
                    </p>
                    <p className="text-white">
                      Don't have an account yet?{" "}
                      <Link to="/signup" className="text-green-500">
                        Sign up
                      </Link>
                    </p>
                  </div>
                  {/* This is a single-line comment in JSX */}
                  <div className="p-4 w-full flex flex-col">
                    <div className="flex flex-col mt-5 text-black bg-white">
                      {/* <label htmlFor="Email">Email</label> */}
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-3"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="flex flex-col mt-5 text-black bg-white">
                      {/* <label htmlFor="Password">Password</label> */}
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        className="p-3"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="p-1 w-full flex flex-col">
                    <button className="w-full mt-4 bg-green-600 text-white rounded-md  h-13 hover:bg-green-800">
                      Sign In
                    </button>
                  </div>
                  <Toaster position="top-right" richColors />
                </form>
              </div>
            </div>
          </ComponentDivLevel4>
        </ComponentDivLevel3>
      </ComponentDivLevel2>
    </ComponentDivLevel1>
  );
};

export default Signin;
