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
import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const firstNameInputRef = useRef(null);
  const lastNameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleFocus = (fieldName) => {
    if (fieldName === "first_name" && firstNameInputRef.current) {
      firstNameInputRef.current.focus();
    } else if (fieldName === "last_name" && lastNameInputRef.current) {
      lastNameInputRef.current.focus();
    } else if (fieldName === "email" && emailInputRef.current) {
      emailInputRef.current.focus();
    } else if (fieldName === "password" && passwordInputRef.current) {
      passwordInputRef.current.focus();
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [error, setError] = useState(null);
  const [error2, setError2] = useState(null);
  const [loading, setLoading] = useState(false);

  const { signUpNewUser } = UserAuth();
  const navigate = useNavigate();

  const ValidateErrors = () => {
    let theError = null;
    if (first_name.trim() === "") {
      theError = "First Name";
      handleFocus("first_name");
      return theError;
    }
    if (last_name.trim() === "") {
      theError = "Last Name";
      handleFocus("last_name");
      return theError;
    }
    if (email.trim() === "") {
      theError = "Email";
      handleFocus("email");
      return theError;
    }
    if (password.trim() === "") {
      theError = "Password";
      handleFocus("password");
      return theError;
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    switch (e.target.name) {
      case "last_name":
        setLastName(e.target.value);
      case "email":
        setEmail(e.target.value);
      case "password":
        setPassword(e.target.value);
    }
    if (!value.trim()) {
      switch (e.target.name) {
      }
      setError2(e.target.name + " is empty" + ": " + e.target.name);
    } else {
      setError2("");
    }
  };

  const handleInputChangeFirstName = (e) => {
    const value = e.target.value;
    setFirstName(e.target.value);
    if (!value.trim()) {
      setError2("First Name is empty");
    } else {
      setError2("");
    }
  };

  const handleInputChangeLastName = (e) => {
    const value = e.target.value;
    setLastName(e.target.value);
    if (!value.trim()) {
      setError2("Last Name is empty");
    } else {
      setError2("");
    }
  };

  const handleInputChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(e.target.value);
    if (!value.trim()) {
      setError2("Email is empty");
    } else {
      setError2("");
    }
  };

  const handleInputChangePassword = (e) => {
    const value = e.target.value;
    setPassword(e.target.value);
    if (!value.trim()) {
      setError2("Password is empty");
    } else {
      setError2("");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const theerror = ValidateErrors();
    if (!theerror) {
      try {
        const result = await signUpNewUser(
          email,
          password,
          first_name,
          last_name
        ); // Call context function
        if (result.success) {
          navigate("/dashboard"); // Navigate to dashboard on success
        } else {
          setError(result.error.message); // Show error message on failure
          {
            toast.error(result.error.message, {
              duration: 2000,
            });
          }
        }
      } catch (err) {
        setError("An unexpected error occurred."); // Catch unexpected errors
      } finally {
        setLoading(false); // End loading state
      }
    } else {
      const theerror = ValidateErrors();
      toast.error("OOPS! " + theerror + " is empty", {
        duration: 2000,
      });
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
                <form onSubmit={handleSignUp}>
                  <div className="p-4 w-full flex flex-col">
                    <h2 className="font-bold pb-2 text-white">
                      Sign up today!
                    </h2>
                    <p className="text-white">
                      Already have an account?{" "}
                      <Link to="/" className="text-green-500">
                        Sign in
                      </Link>
                    </p>
                  </div>
                  <div className="p-4 w-full flex flex-col">
                    <div className="flex flex-col mt-5 text-black bg-white">
                      {/* <label htmlFor="Password">Password</label> */}
                      <input
                        onChange={handleInputChangeFirstName}
                        ref={firstNameInputRef}
                        className="p-3"
                        type="first_name"
                        name="first_name"
                        id="first_name"
                        placeholder="Please enter First Name"
                      />
                    </div>
                    <div className="flex flex-col mt-5 text-black bg-white">
                      {/* <label htmlFor="Password">Password</label> */}
                      <input
                        onChange={handleInputChangeLastName}
                        ref={lastNameInputRef}
                        className="p-3"
                        type="last_name"
                        name="last_name"
                        id="last_name"
                        placeholder="Please enter Last Name"
                      />
                    </div>
                    <div className="flex flex-col mt-5 text-black bg-white">
                      {/* <label htmlFor="Email">Email</label> */}
                      <input
                        onChange={handleInputChangeEmail}
                        ref={emailInputRef}
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
                        onChange={handleInputChangePassword}
                        ref={passwordInputRef}
                        className="p-3"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="p-1 w-full flex flex-col">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full mt-0 bg-green-600 text-white rounded-md  h-13 hover:bg-green-800"
                    >
                      Sign Up
                    </button>
                  </div>
                  {error2 && (
                    <p className="text-red-600 text-center pt-4">{error2}</p>
                  )}
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

export default Signup;
