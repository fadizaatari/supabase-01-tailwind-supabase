import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { router } from "./router.jsx";
import { RouterProvider } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import Test from "./components/Header.jsx";
import Header from "./components/Header.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <div className="flex flex-col h-screen">
        <div className="bg-black h-full">
          <AuthContextProvider>
            <RouterProvider router={router} />
          </AuthContextProvider>
        </div>
      </div>
    </>
  </StrictMode>
);
