import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Signin from "./components/Signin";

import { UserAuth } from "./context/AuthContext";
import Dashboard from "./components/Dashboard";

function App() {
  const { user } = UserAuth();
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Dashboard />
    </>
  );
}

export default App;
