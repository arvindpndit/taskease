import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import LandingPage from "./components/LandingPage.jsx";
import Tasks from "./components/Tasks.jsx";
import SearchComponent from "./components/SearchComponent.jsx";
import Messages from "./components/Messages.jsx";
import Profile from "./components/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/tasks",
        element: <Tasks />,
      },
      {
        path: "/search",
        element: <SearchComponent />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
