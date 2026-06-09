import { RouterProvider } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import { routes } from "../routes";

const App = () => {
  return (
    <RouterProvider router={routes}>
      <MainLayout />
    </RouterProvider>
  );
};

export default App;
