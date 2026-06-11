import { createBrowserRouter } from "react-router-dom";
import HomePage from "./src/pages/Home";
import MainLayout from "./src/components/layout/MainLayout";
import MoviesDetail from "./src/pages/MoviesDetail";
import Movies from "./src/pages/Movies";

export const routes = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "movies/:id",
        element: <MoviesDetail />,
      },
    ],
  },
]);
