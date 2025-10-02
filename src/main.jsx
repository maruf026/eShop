import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {  RouterProvider } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";
import { router } from "./route/route";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
