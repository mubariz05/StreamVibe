import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import CTASection from "../home/CTASection";

const MainLayout = () => {
  return (
    <div style={{ background: "#0f0f0f", minHeight: "100vh" }}>
      <Header />
      <main>
        <Outlet />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
