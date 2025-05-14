// createBrowserRouter 방식
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/global.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TestPage } from "./pages/TestPage.jsx";
import { AttendanceCheckPage } from "./pages/AttendanceCheckPage.jsx";
import { AttendancePage } from "./pages/AttendancePage";
import { LoginPage } from "./pages/LoginPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
  // 테스트를 위한 페이지 추가
  { 
    path: "/test",
    element: <TestPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
