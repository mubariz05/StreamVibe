import { RouterProvider } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import { routes } from "../routes";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={routes}>
        <MainLayout />
      </RouterProvider>
    </AuthProvider>
  );
};

export default App;
