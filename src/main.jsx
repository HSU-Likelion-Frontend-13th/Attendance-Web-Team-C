// createBrowserRouter 방식
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AttendanceCheckPage } from "./pages/AttendanceCheckPage.jsx";
import { AttendancePage } from "./pages/AttendancePage";
import { LoginPage } from "./pages/LoginPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  { 
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/attendance",
    element: <AttendancePage />,
  },
  {
    path: "/calender",
    element: <AttendanceCheckPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
