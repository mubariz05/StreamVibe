import { createBrowserRouter } from "react-router-dom";
import HomePage from "./src/pages/Home";
import MainLayout from "./src/components/layout/MainLayout";
import MoviesDetail from "./src/pages/MoviesDetail";
import Movies from "./src/pages/Movies";
import SubscriptionsPage from "./src/pages/Subscriptions";
import SupportPage from "./src/pages/Support/Support";
import Profile from "./src/pages/Profile";

export const routes = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/movies", element: <Movies /> },
      { path: "movies/:id", element: <MoviesDetail /> },
      { path: "/support", element: <SupportPage /> },
      { path: "/subscriptions", element: <SubscriptionsPage /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);
