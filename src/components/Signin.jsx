import { Toaster, toast } from "sonner";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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
      navigate("/dashboard");
    }

    if (session) {
      closeModal();
      setError(""); // Reset the error when there's a session
    }
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center p-10 bg-black text-white rounded-md text-lg">
      <div className="bg-gray-800 p-6 rounded-md shadow-md">
        <form onSubmit={handleSignIn}>
          <h2 className="font-bold pb-2 ">Sign in</h2>
          <p>
            Don't have an account yet?{" "}
            <Link to="/signup" className="text-green-500">
              Sign up
            </Link>
          </p>
          {/* This is a single-line comment in JSX */}
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
          <button className="w-full mt-4 bg-green-600 text-white rounded-md  h-13 hover:bg-green-800">
            Sign In
          </button>
          <Toaster position="top-right" richColors />
        </form>
      </div>
    </div>
  );
};

export default Signin;
