import { createBrowserRouter } from "react-router-dom";
import HomePage from "./src/pages/Home";
import MainLayout from "./src/components/layout/MainLayout";

export const routes = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
