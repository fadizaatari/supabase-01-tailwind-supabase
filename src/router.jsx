import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Dashboard from "./routes/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";
import ReadRecord from "./components/ReadRecord";
import NotFound from "./components/NotFound";
import Test2 from "./components/Test2";
import SubscriptionDetails from "./components/SubcriptionDetails";
import News from "./components/News";

export const router = createBrowserRouter([
  { path: "/test2", element: <Test2 /> },
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
  {
    path: "/subscriptions/:SubscriptionId",
    element: (
      <PrivateRoute>
        <SubscriptionDetails />
      </PrivateRoute>
    ),
  },
  {
    path: "/news",
    element: (
      <PrivateRoute>
        <News />
      </PrivateRoute>
    ),
  },
]);
