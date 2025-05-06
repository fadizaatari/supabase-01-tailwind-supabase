import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { signUpNewUser } = UserAuth();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await signUpNewUser(email, password); // Call context function

      if (result.success) {
        navigate("/dashboard"); // Navigate to dashboard on success
      } else {
        setError(result.error.message); // Show error message on failure
      }
    } catch (err) {
      setError("An unexpected error occurred."); // Catch unexpected errors
    } finally {
      setLoading(false); // End loading state
    }
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center p-10 bg-black text-white rounded-md text-lg">
      <div className="bg-gray-800 p-6 rounded-md shadow-md text-white">
        <form onSubmit={handleSignUp}>
          <h2 className="font-bold pb-2">Sign up today!</h2>
          <p>
            Already have an account?{" "}
            <Link to="/" className="text-green-500">
              Sign in
            </Link>
          </p>
          <div className="flex flex-col mt-5 text-black bg-white">
            {/* <label htmlFor="Password">Password</label> */}
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="p-3"
              type="firstname"
              name="firstname"
              id="firstname"
              placeholder="Please enter First Name"
            />
          </div>
          <div className="flex flex-col mt-5 text-black bg-white">
            {/* <label htmlFor="Password">Password</label> */}
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="p-3"
              type="lastname"
              name="lastname"
              id="lastname"
              placeholder="Please enter Last Name"
            />
          </div>
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
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4  bg-green-600 text-white rounded-md  h-13"
          >
            Sign Up
          </button>
          {error && <p className="text-red-600 text-center pt-4">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Signup;
