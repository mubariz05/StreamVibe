import { RouterProvider } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import { routes } from "../routes";
import app from "./firebase";

const App = () => {
  console.log(app);
  return (
    <RouterProvider router={routes}>
      <MainLayout />
    </RouterProvider>
  );
};

export default App;
