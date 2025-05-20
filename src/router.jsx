import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Dashboard from "./routes/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";
import ReadRecord from "./components/ReadRecord";
import NotFound from "./components/NotFound";

export const router = createBrowserRouter([
  { path: "/*", element: <NotFound /> },
  { path: "/", element: <App /> },
  { path: "/signup", element: <Signup /> },
  { path: "/signin", element: <Signin /> },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    ),
  },
  {
    path: "/subscriptions",
    element: (
      <PrivateRoute>
        <ReadRecord />
      </PrivateRoute>
    ),
  },
]);
